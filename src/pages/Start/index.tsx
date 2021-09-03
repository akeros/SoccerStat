import { Link } from "react-router-dom";
import './index.css';
export default function Start() {
  return (
    <div className={'wrapper'}>
      <div className={'gradient'}>
        <div>Список Лиг</div>
        <div/>
        <div/>
        <div>Список Команд</div>
      </div>
      <div className={'active-zone'}>
        <Link className={'active-zone-first'} to="/ligs" />
        <Link className={'active-zone-second'} to="/commands" />
      </div>
    </div>
  )
}

