import { useContext } from 'react';
import {
    CalendarStateContext,
    CalendarActionContext,
} from '../Context/CalendarContext';

export function useCalendar() {
    const { selectedDate, dates } = useContext(CalendarStateContext);
    return { selectedDate, dates };
}

export function calendarActions() {
    const { setSelectedDate, setDates } = useContext(CalendarActionContext);
    return { setSelectedDate, setDates };
}
