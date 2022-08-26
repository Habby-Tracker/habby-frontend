import { createContext, useReducer } from 'react';

export const DataContext = createContext();
export const DataDispatchContext = createContext();

function reducer(list, { type, payload }) {
    switch (type) {
        case 'add':
            return [...list, payload];
        case 'remove':
            return list.filter((item) => item.id !== payload.id);
        case 'update':
            return list.map((item) =>
                item.id === payload.id ? payload : item
            );
        case 'load':
            return payload;
        default:
            throw new Error('Invalid action type');
    }
}

export default function dataContextProvider({ children }) {
    const [goals, dispatchGoal] = useReducer(reducer, null);
    const [habits, dispatchHabit] = useReducer(reducer, null);
    const [moods, dispatchMoods] = useReducer(reducer, null);
    const [categories, dispatchCategories] = useReducer(reducer, null);
    const [status, dispatchStatus] = useReducer(reducer, null);
    const [timePeriods, dispatchTimePeriods] = useReducer(reducer, null);
    const [habitTypes, dispatchHabitTypes] = useReducer(reducer, null);

    return (
        <DataContext.Provider value={{ goals, habits, moods, categories, status, timePeriods, habitTypes }}>
            <DataDispatchContext.Provider value={{ dispatchGoal, dispatchHabit, dispatchMoods, dispatchCategories, dispatchStatus, dispatchTimePeriods, dispatchHabitTypes }}>
                {children}
            </DataDispatchContext.Provider>
        </DataContext.Provider>
    );
}
