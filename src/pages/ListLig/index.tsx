import { Link } from "react-router-dom";

export default function ListLig() {
  return (
    <div>
      <button onClick={ListLig}>
      <Link to="/">На главную</Link>
      </button>
    </div>
  );
}

