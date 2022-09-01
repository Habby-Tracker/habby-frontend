import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/DataContext';
import {
    getGoals,
    createGoal,
    deleteGoal,
    updateGoal,
} from '../Services/goal-service';
import { showError, showSuccess } from '../Services/toaster';

export function useGoals() {
    const { goals } = useContext(DataContext);
    const { dispatchGoal } = useContext(DataDispatchContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (goals) return;
        let ignore = false;
        const fetchGoals = async () => {
            const data = await getGoals();
            if (ignore) return;
            if (data) {
                dispatchGoal({ type: 'load', payload: data });
            }
            if (error) {
                setError(error);
            }
        };
        fetchGoals();

        return () => {
            ignore = true;
        };
    }, []);

    return { goals, error };
}

export function goalActions() {
    const { dispatchGoal, dispatchHabit } = useContext(DataDispatchContext);

    const create = async (goal) => {
        const data = await createGoal(goal);
        if (data.message) {
            showError(data);
        } else {
            dispatchGoal({ type: 'add', payload: data.goal });
            data.habits.forEach((habit) => {
                dispatchHabit({ type: 'add', payload: habit });
            });
        }
    };

    const remove = async (id) => {
        const data = await deleteGoal(id);
        if (data.message) {
            showError(data.message);
        } else {
            await dispatchGoal({ type: 'remove', payload: data.goal });
            data.habits.forEach(async (habit) => {
                await dispatchHabit({ type: 'remove', payload: habit });
            });
            showSuccess('Goal deleted');
        }
    };

    const update = async (id, goal) => {
        const data = await updateGoal(id, goal);
        if (data.message) {
            showError(data.message);
        } else {
            dispatchGoal({ type: 'update', payload: data });
        }
    };

    return { create, remove, update };
}
