// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
console.log(data);

  useEffect(() => {
    data && setLigs(data.competitions);
  }, [data]);

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
          <Link to={`/ligs/${lig.id}`} key={lig.id}>
            <div className={'lig-card'} >
              <img width={100} height={100} src={lig.emblemUrl || lig.area.ensignUrl || notFound}/>
              <div className='lig-card-style'>
                <div>{lig.name}</div>
                <div>{lig.area.name}</div>
                <div>
                  {lig?.currentSeason?.startDate.replace(/\d{2}(\d{2})-(\d+)-(\d+)/, '$3.$2.$1')}
                  {' - '}
                  {lig?.currentSeason?.endDate.replace(/\d{2}(\d{2})-(\d+)-(\d+)/, '$3.$2.$1')}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

