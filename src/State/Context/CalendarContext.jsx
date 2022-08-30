import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useHabits } from '../Hooks/habits';

export const CalendarStateContext = createContext();
export const CalendarActionContext = createContext();

export default function CalendarProvider({ children }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dates, setDates] = useState([]);
    const [selectedDateHabits, setSelectedDateHabits] = useState();
    const { habits } = useHabits();
    const state = { selectedDate, dates, selectedDateHabits };
    const actions = { setSelectedDate, setDates, setSelectedDateHabits };

    useEffect(() => {
        if (habits) {
            setSelectedDateHabits(habits.filter(habit => selectedDate.toDateString() === new Date(habit.dueDate).toDateString()));
        }
    }, [habits, selectedDate]);

    console.log('habits in context', habits);

    useEffect(() => {
        setDates([]);
        const prevDate1 = new Date(selectedDate);
        prevDate1.setDate(selectedDate.getDate() - 1);
        const prevDate2 = new Date(selectedDate);
        prevDate2.setDate(selectedDate.getDate() - 2);
        const nextDate1 = new Date(selectedDate);
        nextDate1.setDate(selectedDate.getDate() + 1);
        const nextDate2 = new Date(selectedDate);
        nextDate2.setDate(selectedDate.getDate() + 2);
        setDates([prevDate2, prevDate1, selectedDate, nextDate1, nextDate2]);
    }, [selectedDate]);

    return (
        <CalendarStateContext.Provider value={state}>
            <CalendarActionContext.Provider value={actions}>
                {children}
            </CalendarActionContext.Provider>
        </CalendarStateContext.Provider>
    );
}
