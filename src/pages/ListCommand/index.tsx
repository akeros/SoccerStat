import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import './index.css';
import Search from '../../components/Search';
import useDebounce from '../../components/hooks/useDebounce';

export default function ListCommand() {
  const [commands, setCommands] = useState<any>([]);
  const [filteredCommand, setFilteredCommand] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    const matchRegExp = new RegExp(debounceSearch, 'i');
    setFilteredCommand(commands.filter((command: any) => command?.name?.match?.(matchRegExp)));
  }, [debounceSearch]);

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
      .then(() => setLoaded(true))
      .catch(error => console.error('error', error));
  }, []);

  const commandList = debounceSearch ? filteredCommand : commands;

  return (
    <div>
      <TopBar title={'Список Команд'}/>
      <div>
        <Search onChange={setSearch} isLoaded={isLoaded}/>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {commandList.map((command: any) => (
          <div className={'command-card'} key={command.name}>
            <img width={100} height={100} src={command.crestUrl}/>
            <div>{command.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

