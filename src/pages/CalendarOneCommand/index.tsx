import { subHours } from 'date-fns';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import '@zach.codes/react-calendar/dist/calendar-tailwind-no-reset.css';

import TopBar from "../../components/TopBar";
import React from 'react';
import useFetch from '../../components/hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Calendar from '../../components/Calendar';

export default function CalendarOneCommand() {
  const { id } = useParams<any>();

  const {
    isLoaded,
    error,
    retry,
    data,
  } = useFetch<any>(`teams/${id}/matches`);

  const matches = data?.matches.map((match: any) => {
    return {
      title: `${match.homeTeam.name} - ${match.awayTeam.name}`,
      date: subHours(new Date(match.utcDate), 2),
    }
  });

  return (
    <div>
      <TopBar title={'Календарь Одной Комманды'}/>
      <Loader isLoaded={isLoaded}/>
      <Error error={error} retry={retry}/>
      <Calendar events={matches} />
    </div>
  );
}

