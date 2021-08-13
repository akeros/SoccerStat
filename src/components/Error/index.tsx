import React from 'react';
import './index.css'

interface IProps {
  error: Error | null;
  retry(): void;
}

export default function Error({ error, retry }: IProps) {
  return error ? (
    <div className={'error'}>
      <span className={'error-text'}>Ошибка запроса к серверу </span>
      <button className={'error-retry'} onClick={retry}>Повторить</button>
    </div>
  ) : null
}
