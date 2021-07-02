import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import './index.css';

export default function ListCommand() {
  const [commands, setCommands] = useState<any>([]);
  useEffect(() => {
    const url = "https://api.football-data.org/v2/teams"
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        "X-Auth-Token": "32491c9952d44cbcbd0ccf0b2e6a2d23",
      },
      mode: 'cors'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => setCommands(result.teams))
      .catch(error => console.error('error', error));
  }, []);
  return (
    <div>
      <TopBar title={'Лист Комманд'}/>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {commands.map((command: any) => (
          <div className={'command-card'} key={command.name}>
            <img width={100} height={100} src={command.crestUrl}/>
            <div>{command.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

