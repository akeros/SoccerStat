import { ru } from 'date-fns/locale';
import { DefaultMonthlyEventItem, MonthlyBody, MonthlyCalendar, MonthlyDay } from '@zach.codes/react-calendar';
import { format, startOfMonth } from 'date-fns';
import React, { useState } from 'react';
import { CalendarNav } from './CalendarNav';
import CalendarFilter from './CalendarFilter';

interface IProps {
  events?: Array<{ title: string; date: Date }>
}

export default function Calendar({ events }: IProps) {
  let [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(new Date())
  );

  if (!events) {
    return null;
  }

  if (!events.length) {
    return (
      <div>Нет матчей</div>
    )
  }

  return (
    <MonthlyCalendar
      currentMonth={currentMonth}
      onCurrentMonthChange={date => setCurrentMonth(date)}
      locale={ru}
    >
      <CalendarFilter />
      <CalendarNav />
      <MonthlyBody
        events={events}
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
  );
}
