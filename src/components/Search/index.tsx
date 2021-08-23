import React, { RefObject, useEffect, useRef } from 'react';
import chest from '../chest.png'
import search from '../search.png'
import './index.css'
import { useHistory, useLocation } from 'react-router-dom';

interface IProps {
  onChange(text: string): void;
  isLoaded: boolean;
}

export default function Search(props: IProps) {
  const inputRef: RefObject<any> = useRef(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (props.isLoaded) {
      const query: any = location.search ? location.search
        .replace('?', '')
        .split('&')
        .reduce((acc,item) => {
          const [key, value] = item.split('=');
          return { ...acc, [key]: value };
        }, {}) : {};

      props.onChange(query?.search || '');
      inputRef.current.value = query?.search || '';
    }
  }, [location.search, props.isLoaded]);

  return (
    <div className={'search-wrapper'}>
      <img width={25} height={25} src={search}/>
      <input disabled={!props.isLoaded} ref={inputRef} className={'search'} onChange={(event) => {
        props.onChange(event.target.value);
        history.push({
          pathname: location.pathname,
          search: `?search=${event.target.value}`,
        })
      } }/>
      <button className={'search-clear'} onClick={() => {
        props.onChange('');
        inputRef.current.value = '';
      }}>
        <img width={25} height={25} src={chest}/>
      </button>
    </div>
  );
}
