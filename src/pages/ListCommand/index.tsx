import { Link } from "react-router-dom";

export default function ListCommand() {
  return (
    <div>
      <button onClick={ListCommand}>
      <Link to="/">На главную</Link>
      </button>
    </div>
  );
}

