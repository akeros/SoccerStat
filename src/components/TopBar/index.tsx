import React from 'react';
import Back from '../Back';
import './index.css';

interface IProps {
  title: string;
}

export default function TopBar(props: IProps) {
  return (
    <div className={'top-bar'}>
      <div className={'top-bar-back'}>
        <Back/>
      </div>
      {props.title}
    </div>
  );
}
