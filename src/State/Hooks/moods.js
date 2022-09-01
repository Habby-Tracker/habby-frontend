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
        const data = await createMood(mood);
        if (data.message) {
            showError(data.message);
        } else {
            dispatchMoods({ type: 'add', payload: data });
        }
    };

    const update = async (id, mood) => {
        const data = await updateMood(id, mood);
        if (data.message) {
            showError(data.message);
        } else {
            dispatchMoods({ type: 'update', payload: data });
        }
    };

    const remove = async (id) => {
        const data = await deleteMood(id);
        if (data.message) {
            showError(data.message);
        } else {
            dispatchMoods({ type: 'remove', payload: data });
        }
    };

    return { create, update, remove };
}
