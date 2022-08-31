import { useContext } from 'react';
import {
    CalendarStateContext,
    CalendarActionContext,
} from '../Context/CalendarContext';

export function useCalendar() {
    const { selectedDate, dates, selectedDateHabits, selectedDateGoals } =
        useContext(CalendarStateContext);
    return { selectedDate, dates, selectedDateHabits, selectedDateGoals };
}

export function calendarActions() {
    const {
        setSelectedDate,
        setDates,
        setSelectedDateHabits,
        setSelectedDateGoals,
    } = useContext(CalendarActionContext);
    return {
        setSelectedDate,
        setDates,
        setSelectedDateHabits,
        setSelectedDateGoals,
    };
}
