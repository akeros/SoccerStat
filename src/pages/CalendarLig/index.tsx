import { format, subHours, startOfMonth } from 'date-fns';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import '@zach.codes/react-calendar/dist/calendar-tailwind-no-reset.css';

import TopBar from "../../components/TopBar";
import React, { useState } from 'react';
import useFetch from '../../components/hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Calendar from '../../components/Calendar';


export default function CalendarLig() {
  const { id } = useParams<any>();

  const {
    isLoaded,
    error,
    retry,
    data,
  } = useFetch<any>(`competitions/${id}/matches`);

  const matches = data?.matches?.map((match: any) => {
    return {
      title: `${match.awayTeam.name} - ${match.homeTeam.name}`,
      date: subHours(new Date(match.utcDate), 2),
    }
  });
  // console.log(matches);
  return (
    <div>
      <TopBar title={'Календарь Лиг'}/>
      <Loader isLoaded={isLoaded}/>
      <Error error={error} retry={retry}/>
      <Calendar events={matches} />
    </div>
  );
}

