import './index.css';
import { useHistory, useLocation } from 'react-router-dom';

export default function CalendarFilter() {
  const location = useLocation();
  const history = useHistory();

  const query: any = location.search ? location.search
    .replace('?', '')
    .split('&')
    .reduce((acc,item) => {
      const [key, value] = item.split('=');
      return { ...acc, [key]: value };
    }, {}) : {};

  const queryToString = (): string => Object.entries(query)
    .reduce((acc, [key, value], index) => acc + `${index ? '&' : '?'}${key}=${value}`, '');

  return (
    <div>
      <div>
        <label htmlFor="start">С:</label>

        <input
          type="date"
          id="start"
          name="trip-start"
          value={query?.from}
          max={query?.to}
          onChange={(event) => {
            query.from = event.target.value;
            history.push({
              pathname: location.pathname,
              search: queryToString(),
            })
          }}
        />
      </div>
      <div>
        <label htmlFor="end">По:</label>

        <input
          type="date"
          id="end"
          name="trip-start"
          value={query?.to}
          min={query?.from}
          onChange={(event) => {
            query.to = event.target.value;
            history.push({
              pathname: location.pathname,
              search: queryToString(),
            })
          }}
        />
      </div>
    </div>

  );
}
