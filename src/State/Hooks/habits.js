import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/DataContext';
import {
    createHabit,
    getHabits,
    updateHabit,
    deleteHabit,
} from '../Services/habit-service';
import { showError } from '../Services/toaster';
import { useUser } from './user';

export function useHabits() {
    const { habits, goals } = useContext(DataContext);
    const { dispatchHabit } = useContext(DataDispatchContext);
    const [error, setError] = useState(null);
    const { user } = useUser();

    useEffect(() => {
        if (!user) {
            dispatchHabit({ type: 'load', payload: null });
            return;
        }
        if (habits) return;

        let ignore = false;
        const fetchHabits = async () => {
            const data = await getHabits();
            if (ignore) return;
            if (data) {
                dispatchHabit({ type: 'load', payload: data });
            }
            if (!data) {
                setError(data.error);
            }
        };
        fetchHabits();

        return () => {
            ignore = true;
        };
    }, [goals, user]);

    return { habits, error };
}

export function habitActions() {
    const { dispatchHabit } = useContext(DataDispatchContext);

    const create = async (newHabit) => {
        const data = await createHabit(newHabit);
        if (data.message) {
            showError(data.message);
        } else {
            dispatchHabit({ type: 'add', payload: data });
        }
    };

    const removeHabit = async (id) => {
        const data = await deleteHabit(id);
        if (data.message) {
            showError(data.message);
        } else {
            dispatchHabit({ type: 'remove', payload: data });
        }
    };

    const update = async (id, updatedHabit) => {
        const data = await updateHabit(id, updatedHabit);
        if (data.message) {
            showError(data.message);
        } else {
            dispatchHabit({ type: 'update', payload: data });
        }
    };

    return { create, removeHabit, update };
}
