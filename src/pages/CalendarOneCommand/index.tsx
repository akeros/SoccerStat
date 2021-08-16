// import { Link } from "react-router-dom";
import { format, subHours, startOfMonth } from 'date-fns';
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import '@zach.codes/react-calendar/dist/calendar-tailwind-no-reset.css';

import TopBar from "../../components/TopBar";
import { useState } from 'react';
import useFetch from '../../components/hooks/useFetch';
import { ru } from 'date-fns/locale';
import { CalendarNav } from '../../components/CalendarNav';
import { useParams } from 'react-router-dom';

export default function CalendarOneCommand() {
  let [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(new Date())
  );

  const { id } = useParams<any>();

  const {
    isLoaded,
    error,
    retry,
    data,
  } = useFetch<any>(`teams/${id}/matches`);


  const matches = data?.matches.map((match: any) => {
    return {
      title: match.competition.name,
      date: subHours(new Date(match.utcDate), 2),
    }
  }) || []

  return (
    <div>
      <TopBar title={'Календарь Одной Комманды'}/>
      <MonthlyCalendar
        currentMonth={currentMonth}
        onCurrentMonthChange={date => setCurrentMonth(date)}
        locale={ru}
      >
        <CalendarNav />
        <MonthlyBody
          events={matches}
        >
          <MonthlyDay
            renderDay={data =>
              data.map((item: any, index) => (
                <DefaultMonthlyEventItem
                  key={index}
                  title={item.title}
                  // Format the date here to be in the format you prefer
                  date={format(item.date, 'k:mm')}
                />
              ))
            }
          />
        </MonthlyBody>
      </MonthlyCalendar>
    </div>
  );
}

