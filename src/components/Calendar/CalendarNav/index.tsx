import { useMonthlyCalendar } from '@zach.codes/react-calendar';
import { addMonths, format, getYear, startOfMonth, subMonths } from 'date-fns';
import { ru } from 'date-fns/locale';
import './index.css';

interface IProps {
  from?: Date;
  to?: Date;
}

export const CalendarNav = ({ from, to }: IProps) => {
  let { currentMonth, onCurrentMonthChange } = useMonthlyCalendar();

  return (
    <div className="calendar-nav">
      <button
        disabled={from && currentMonth <= from}
        onClick={() => onCurrentMonthChange(subMonths(currentMonth, 1))}
        className="calendar-nav-arrow"
      >
        {'<'}
      </button>
      <div className="calendar-nav-month">
        {format(
          currentMonth,
          getYear(currentMonth) === getYear(new Date()) ? 'LLLL' : 'LLLL yyyy',
          { locale: ru }
        )}
      </div>
      <button
        disabled={to && currentMonth >= startOfMonth(to)}
        onClick={() => onCurrentMonthChange(addMonths(currentMonth, 1))}
        className="calendar-nav-arrow"
      >
        {'>'}
      </button>
    </div>
  );
};
