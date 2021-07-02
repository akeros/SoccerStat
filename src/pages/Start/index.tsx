import { Link } from "react-router-dom";
import './index.css';
export default function Start() {
  return (
    <div className='fon' >
      <div className='wrapper'>
        <Link to="/list-lig">Лист Лиг</Link>
        <Link to="/list-command">Список лиг</Link>
        <Link to="/calendar-lig">Календарь Лиг</Link>
        <Link to="/calendar-one-command">Календарь Одной Команды</Link>
      </div>
    </div>
  );
}

