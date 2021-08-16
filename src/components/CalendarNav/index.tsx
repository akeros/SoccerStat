import { useMonthlyCalendar } from '@zach.codes/react-calendar';
import { addMonths, format, getYear, subMonths } from 'date-fns';
import { ru } from 'date-fns/locale';
import './index.css';

export const CalendarNav = () => {
  let { currentMonth, onCurrentMonthChange } = useMonthlyCalendar();

  return (
    <div className="calendar-nav">
      <button
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
        onClick={() => onCurrentMonthChange(addMonths(currentMonth, 1))}
        className="calendar-nav-arrow"
      >
        {'>'}
      </button>
    </div>
  );
};
