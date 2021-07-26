import React, { RefObject, useRef } from 'react';
import chest from '../chest.png'
import search from '../search.png'
import './index.css'

interface IProps {
  onChange(text: string): void;
}

export default function Search(props: IProps) {
  const inputRef: RefObject<any> = useRef(null);

  return (
    <div className={'search-wrapper'}>
      <img width={25} height={25} src={search}/>
      <input ref={inputRef} className={'search'} onChange={(event) => {
        props.onChange(event.target.value);
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
