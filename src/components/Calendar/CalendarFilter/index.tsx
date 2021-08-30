import './index.css';
import { useHistory, useLocation } from 'react-router-dom';
import { queryToObject, queryToString } from '../../../utils';

interface IProps {
  from?: Date;
  to?: Date;
}

export default function CalendarFilter({ to, from }: IProps) {
  const location = useLocation();
  const history = useHistory();
  const query = queryToObject(location.search)

  return (
    <div className={'calendar-filter'}>
      <div className={'calendar-filter-input'}>
        <label htmlFor="start">С:</label>

        <input
          type="date"
          id="start"
          name="trip-start"
          value={query?.from}
          min={from?.toISOString().slice(0, 10)}
          max={query?.to}
          onChange={(event) => {
            query.from = event.target.value;
            history.push({
              pathname: location.pathname,
              search: queryToString(query),
            })
          }}
        />
      </div>
      <div className={'calendar-filter-input'}>
        <label htmlFor="end">По:</label>

        <input
          type="date"
          id="end"
          name="trip-start"
          value={query?.to}
          min={query?.from}
          max={to?.toISOString().slice(0, 10)}
          onChange={(event) => {
            query.to = event.target.value;
            history.push({
              pathname: location.pathname,
              search: queryToString(query),
            })
          }}
        />
      </div>
    </div>

  );
}
