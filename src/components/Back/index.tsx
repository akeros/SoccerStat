import { Link, useLocation } from 'react-router-dom';
import './index.css';

export default function Back() {
  const location = useLocation();

  const path = location.pathname.replace(/\/\w+$/, '');

  return (
    <div className={'back-wrapper'}>
      <Link className={'back-link'} to={path}>{'< '}Назад</Link>
    </div>
  )
}
