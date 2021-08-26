import { ru } from 'date-fns/locale';
import { DefaultMonthlyEventItem, MonthlyBody, MonthlyCalendar, MonthlyDay } from '@zach.codes/react-calendar';
import { format, startOfMonth, subHours } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { CalendarNav } from './CalendarNav';
import CalendarFilter from './CalendarFilter';
import './index.css';
import { useLocation } from 'react-router-dom';
import { queryToObject } from '../../utils';

interface IProps {
  events?: Array<{ title: string; date: Date }>
}

export default function Calendar({ events }: IProps) {
  const location = useLocation();
  const query = queryToObject(location.search);
  const from = query.from && subHours(new Date(query.from), 2);
  const to = query.to && subHours(new Date(query.to), 2);


  const filteredEvents = events && location.search ? events.filter((event =>
      (!from || event.date >= from) && (!to || event.date <= to)
  )) : events || [];

  const startDate = filteredEvents?.[0]?.date;
  const endDate = filteredEvents?.[filteredEvents.length - 1]?.date;

  const currentDay = (endDate && endDate <= new Date()) ? endDate : new Date();
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(currentDay));

  useEffect(() => {
    endDate && setCurrentMonth(endDate);
  }, [endDate])

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
      <div className={'calendar'}>
        <CalendarFilter from={startDate} to={endDate} />
        <CalendarNav from={startDate} to={endDate} />
      </div>
      <MonthlyBody
        events={filteredEvents}
      >
        <MonthlyDay
          renderDay={data =>
            data.map((item: any, index) => (
              <DefaultMonthlyEventItem
                key={index}
                title={item.title}
                date={format(item.date, 'k:mm')}
              />
            ))
          }
        />
      </MonthlyBody>
    </MonthlyCalendar>
  );
}
