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

export default function dataContext({ children }) {
    const [list, dispatch] = useReducer(reducer, null);
    return (
        <DataContext.Provider value={list}>
            <DataDispatchContext.Provider value={dispatch}>
                {children}
            </DataDispatchContext.Provider>
        </DataContext.Provider>
    );
}
