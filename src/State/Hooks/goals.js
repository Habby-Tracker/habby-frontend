import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/dataContext';
import { getGoals, createGoal, deleteGoal, updateGoal } from '../Services/goals-service';
import { showError } from '../Services/toaster';

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
            if (data.body) {
                dispatchGoal({ type: 'load', payload: data });
            }
            if(data.error) {
                setError(data.error);
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
    const { dispatchGoal } = useContext(DataDispatchContext);

    const create = async (goal) => {
        const { body, error } = await createGoal(goal);
        if(body) {
            dispatchGoal({ type: 'add', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };

    const remove = async (id) => {
        const { body, error } = await deleteGoal(id);
        if(body) {
            dispatchGoal({ type: 'remove', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };

    const update = async (id, goal) => {
        const { body, error } = await updateGoal(id, goal);
        if(body) {
            dispatchGoal({ type: 'update', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };
    
    return { create, remove, update };
}
