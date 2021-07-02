import { Link } from "react-router-dom";
import './index.css';

export default function Back() {
  return (
    <div className={'back-wrapper'}>
      <Link className={'back-link'} to="/">{'< '}Главная</Link>
    </div>
  )
}
