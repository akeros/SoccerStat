// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Back from "../../components/Back";
import TopBar from "../../components/TopBar";
import './index.css';
import React, { useEffect, useState } from 'react';
import notFound from '../../kaknibud.png';
import Search from '../../components/Search';
import useDebounce from '../../components/hooks/useDebounce';
import useFetch from '../../components/hooks/useFetch';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

export default function ListLig() {
  const [ligs, setLigs] = useState<any>([]);
  const [filteredLigs, setFilteredLigs] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    const matchRegExp = new RegExp(debounceSearch, 'i');
    setFilteredLigs(ligs.filter((lig: any) => lig?.name?.match?.(matchRegExp)));
  }, [debounceSearch]);

  const {
    isLoaded,
    error,
    data,
    retry,
  } = useFetch<any>('competitions')

  useEffect(() => {
    data && setLigs(data.competitions);
  }, [data]);

  console.log(filteredLigs);

  const list = debounceSearch ? filteredLigs : ligs;

  return (
    <div>
     <TopBar title={'Список Лиг'}/>
      <div>
        <Search onChange={setSearch} isLoaded={isLoaded}/>
      </div>
      <Loader isLoaded={isLoaded}/>
      <Error error={error} retry={retry}/>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {list.map((lig: any) => (
          <div className={'lig-card'} key={lig.id}>
            <img width={100} height={100} src={lig.emblemUrl || lig.area.ensignUrl || notFound}/>
            <div>{lig.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

