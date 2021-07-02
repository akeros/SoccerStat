import { Link } from "react-router-dom";

export default function CalendarOneCommand() {
  return (
    <div>
      <button onClick={CalendarOneCommand}>
      <Link to="/">На главную</Link>
      </button>
    </div>
  );
}

