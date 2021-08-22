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


export default function CalendarLig() {
  let [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(new Date())
  );

  const { id } = useParams<any>();

  const {
    isLoaded,
    error,
    retry,
    data,
  } = useFetch<any>(`teams/${id}/ligs`);


  const ligs = data?.ligs.map((match: any) => {
    return {
      title: ligs.competition.name,
      date: subHours(new Date(ligs.utcDate), 2),
    }
  }) || []
  return (
    <div>
       <TopBar title={'Календарь Лиг'}/>
       <MonthlyCalendar
        currentMonth={currentMonth}
        onCurrentMonthChange={date => setCurrentMonth(date)}
        locale={ru}
      >
        <CalendarNav />
        <MonthlyBody
          events={ligs}
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

