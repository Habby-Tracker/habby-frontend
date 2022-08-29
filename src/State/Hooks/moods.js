import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/DataContext';
import {
    createMood,
    getAllMoodsByUser,
    updateMood,
    deleteMood,
} from '../Services/mood-service';
import { showError } from '../Services/toaster';

export function useMoods() {
    const { moods } = useContext(DataContext);
    const { dispatchMoods } = useContext(DataDispatchContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (moods) return;
        let ignore = false;
        const fetchMoods = async () => {
            const data = await getAllMoodsByUser();
            if (ignore) return;
            if (data.body) {
                dispatchMoods({ type: 'load', payload: data });
            }
            if (data.error) {
                setError(data.error);
            }
        };
        fetchMoods();

        return () => {
            ignore = true;
        };
    }, []);

    return { moods, error };
}

export function moodActions() {
    const { dispatchMoods } = useContext(DataDispatchContext);

    const create = async (mood) => {
        const { body, error } = await createMood(mood);
        if (body) {
            dispatchMoods({ type: 'add', payload: body });
        }
        if (error) {
            showError(error.message);
        }
    };

    const update = async (id, mood) => {
        const { body, error } = await updateMood(id, mood);
        if (body) {
            dispatchMoods({ type: 'update', payload: body });
        }
        if (error) {
            showError(error.message);
        }
    };

    const remove = async (id) => {
        const { body, error } = await deleteMood(id);
        if (body) {
            dispatchMoods({ type: 'remove', payload: body });
        }
        if (error) {
            showError(error.message);
        }
    };

    return { create, update, remove };
}
