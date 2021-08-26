import { Link } from "react-router-dom";
import './index.css';
export default function Start() {
  return (
    <div className='fon' >
      <div className='wrapper'>
        <Link className={'wrapper-link'} to="/ligs">Список Лиг</Link>
        <Link className={'wrapper-link'} to="/commands">Список Команд</Link>
      </div>
    </div>
  );
}

