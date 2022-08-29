import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/DataContext';
import {
    createHabit,
    getHabits,
    updateHabit,
    deleteHabit,
} from '../Services/habit-service';
import { showError } from '../Services/toaster';

export function useHabits() {
    const { habits } = useContext(DataContext);
    const { dispatchHabit } = useContext(DataDispatchContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (habits) return;
        let ignore = false;
        const fetchHabits = async () => {
            const data = await getHabits();
            if (ignore) return;
            if (data.body) {
                dispatchHabit({ type: 'load', payload: data });
            }
            if (data.error) {
                setError(data.error);
            }
        };
        fetchHabits();

        return () => {
            ignore = true;
        };
    }, []);

    return { habits, error };
}

export function habitActions() {
    const { dispatchHabit } = useContext(DataDispatchContext);

    const create = async (newHabit) => {
        const { body, error } = await createHabit(newHabit);
        if (body) {
            dispatchHabit({ type: 'add', payload: body });
        }
        if (error) {
            showError(error.message);
        }
    };

    const remove = async (id) => {
        const { body, error } = await deleteHabit(id);
        if (body) {
            dispatchHabit({ type: 'add', payload: body });
        }
        if (error) {
            showError(error.message);
        }
    };

    const update = async (id, updatedHabit) => {
        const { body, error } = await updateHabit(id, updatedHabit);
        if (body) {
            dispatchHabit({ type: 'add', payload: body });
        }
        if (error) {
            showError(error.message);
        }
    };

    return { create, remove, update };
}
