import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useGoals } from '../Hooks/goals';
import { useHabits } from '../Hooks/habits';

export const CalendarStateContext = createContext();
export const CalendarActionContext = createContext();

export default function CalendarProvider({ children }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dates, setDates] = useState([]);
    const [selectedDateHabits, setSelectedDateHabits] = useState();
    const [selectedDateGoals, setSelectedDateGoals] = useState();
    const { habits } = useHabits();
    const { goals } = useGoals();
    const state = { selectedDate, dates, selectedDateHabits, selectedDateGoals };
    const actions = { setSelectedDate, setDates, setSelectedDateHabits, setSelectedDateGoals };

    useEffect(() => {
        if (habits && habits.length && goals && goals.length) {
            const selectedDateHabits = habits.filter(habit => selectedDate.toDateString() === new Date(habit.dueDate).toDateString());
            setSelectedDateHabits(selectedDateHabits);
            const idsObj = selectedDateHabits.reduce((acc, curr) => {acc[curr.goalID] = true; return acc;}, {});
            const selectedDateGoals = goals.filter(goal => idsObj[goal.id]);
            setSelectedDateGoals(selectedDateGoals);
        }
    }, [habits, selectedDate, goals]);

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
