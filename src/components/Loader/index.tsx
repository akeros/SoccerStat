import React from 'react';
import './index.css';

interface IProps {
  isLoaded: boolean;
}

export default function Loader({ isLoaded }: IProps) {
 return !isLoaded ? (
   <div className={'loader'} >
     <span className={'loader-text'}>загрузка... </span>
   </div>
 ) : null;
}

