import React from 'react';
import './index.css'

interface IProps {
  error: Error | null;
  retry(): void;
}

export default function Error({ error, retry }: IProps) {
  switch (error?.message) {
    case undefined:
      return null;
    case '403':
      return (
        <div className={'error'}>
          <span className={'error-text'}>Недоступно в бесплатный версии </span>
        </div>
      );
    default:
      return (
        <div className={'error'}>
          <span className={'error-text'}>Ошибка запроса к серверу </span>
          <button className={'error-retry'} onClick={retry}>Повторить</button>
        </div>
      );
  }
}
