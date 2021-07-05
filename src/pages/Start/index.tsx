import { Link } from "react-router-dom";
import './index.css';
export default function Start() {
  return (
    <div className='fon' >
      <div className='wrapper'>
        <Link className={'wrapper-link'} to="/list-lig">Список Лиг</Link>
        <Link className={'wrapper-link'} to="/list-command">Список Команд</Link>
        <Link className={'wrapper-link'} to="/calendar-lig">Календарь Лиг</Link>
        <Link className={'wrapper-link'} to="/calendar-one-command">Календарь Одной Команды</Link>
      </div>
    </div>
  );
}

