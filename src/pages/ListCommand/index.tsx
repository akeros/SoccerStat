import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import './index.css';
import Search from '../../components/Search';
import useDebounce from '../../components/hooks/useDebounce';
import useFetch from '../../components/hooks/useFetch';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

export default function ListCommand() {
  const [commands, setCommands] = useState<any>([]);
  const [filteredCommand, setFilteredCommand] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    const matchRegExp = new RegExp(debounceSearch, 'i');
    setFilteredCommand(commands.filter((command: any) => command?.name?.match?.(matchRegExp)));
  }, [debounceSearch]);

  const {
    isLoaded,
    error,
    retry,
    data,
  } = useFetch<any>('teams');

  useEffect(() => {
    data && setCommands(data.teams);
  }, [data])

  const commandList = debounceSearch ? filteredCommand : commands;

  return (
    <div>
      <TopBar title={'Список Команд'}/>
      <div>
        <Search onChange={setSearch} isLoaded={isLoaded}/>
      </div>
      <Loader isLoaded={isLoaded}/>
      <Error error={error} retry={retry}/>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {commandList.map((command: any) => (
          <Link to={`/calendar-one-command/${command.id}`}>
            <div className={'command-card'} key={command.name}>
              <img width={100} height={100} src={command.crestUrl}/>
              <div>{command.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

