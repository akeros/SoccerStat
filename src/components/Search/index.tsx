import React from 'react';
import chest from '../chest.png'
import search from '../search.png'
import './index.css'

interface IProps {
  onChange(text: string): void;
}

export default function Search(props: IProps) {
  return (
    <div className={'search-wrapper'}>
      <img width={25} height={25} src={search}/>
      <input className={'search'} onChange={(event) => {
        console.log(event.target.value);
        props.onChange(event.target.value);
      } }/>
      <button className={'search-clear'}>
        <img width={25} height={25} src={chest}/>
      </button>
    </div>
  );
}
