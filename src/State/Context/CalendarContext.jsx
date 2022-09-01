import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useGoals } from '../Hooks/goals';
import { useHabits } from '../Hooks/habits';
import { useUser } from '../Hooks/user';

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
        if (habits && habits.length >= 0 && goals && goals.length >= 0) {
            const selectedDateHabits = habits.filter(habit => selectedDate.toDateString() === new Date(habit.dueDate).toDateString());
            selectedDateHabits.sort((a, b) => {
                if (a.statusID < b.statusID){
                    return -1;
                }
                if (a.statusID > b.statusID){
                    return 1;
                }
                return 0;
            });
            setSelectedDateHabits(selectedDateHabits);
            const idsObj = selectedDateHabits.reduce((acc, curr) => {acc[curr.goalID] = true; return acc;}, {});
            const selectedDateGoals = goals.filter(goal => idsObj[goal.id]);
            selectedDateGoals.sort((a, b) => {
                const aHabits = habits.filter(habit => habit.goalID === Number(a.id));
                const bHabits = habits.filter(habit => habit.goalID === Number(b.id));
                const aProgress = aHabits.filter(habit => habit.statusID === '3').length / aHabits.length;
                const bProgress = bHabits.filter(habit => habit.statusID === '3').length / bHabits.length;
                if (aProgress < bProgress) {
                    return 1;
                }
                if (aProgress > bProgress) {
                    return -1;
                }
                return 0;
            });
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
