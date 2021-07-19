// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Back from "../../components/Back";
import TopBar from "../../components/TopBar";
import './index.css';
import React, { useEffect, useState } from 'react';
import notFound from '../../kaknibud.png';
import Search from '../../components/Search';
import { log } from 'util';

export default function ListLig() {
  const [ligs, setLigs] = useState<any>([]);
  const [filteredLigs, setFilteredLigs] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const url = "https://api.football-data.org/v2/competitions"
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        "X-Auth-Token": "32491c9952d44cbcbd0ccf0b2e6a2d23",
      },
      mode: 'cors'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => setLigs(result.competitions))
      .catch(error => console.error('error', error));
  }, []);

  console.log(filteredLigs);

  const list = search ? filteredLigs : ligs;

  return (
    <div>
     <TopBar title={'Список Лиг'}/>
      <div>
        <Search onChange={(text) => {
          text && setSearch(text);
          setFilteredLigs(ligs.filter((lig: any) => lig?.name?.match?.(text)));
        }}/>
      </div>
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

