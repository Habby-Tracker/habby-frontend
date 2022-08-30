import { useContext } from 'react';
import {
    CalendarStateContext,
    CalendarActionContext,
} from '../Context/CalendarContext';

export function useCalendar() {
    const { selectedDate, dates, selectedDateHabits } =
        useContext(CalendarStateContext);
    return { selectedDate, dates, selectedDateHabits };
}

export function calendarActions() {
    const { setSelectedDate, setDates, setSelectedDateHabits } = useContext(
        CalendarActionContext
    );
    return { setSelectedDate, setDates, setSelectedDateHabits };
}
