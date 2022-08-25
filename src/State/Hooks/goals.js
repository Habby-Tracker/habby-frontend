import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/dataContext';
import { getGoals, createGoal } from '../Services/goals-service';
import { showError } from '../Services/toaster';

export function useGoals() {
    const { goals } = useContext(DataContext);
    const { dispatch } = useContext(DataDispatchContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (goals) return;
        let ignore = false;
        const fetchGoals = async () => {
            const data = await getGoals();
            if (ignore) return;
            if (data.body) {
                dispatch({ type: 'load', payload: data });
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
    const { dispatch } = useContext(DataDispatchContext);

    const create = async (goal) => {
        const { body, error } = await createGoal(goal);
        if(body) {
            dispatch({ type: 'add', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };

    const remove = async (goal) => {
        const { body, error } = await createGoal(goal);
        if(body) {
            dispatch({ type: 'add', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };

    const update = async (goal) => {
        const { body, error } = await createGoal(goal);
        if(body) {
            dispatch({ type: 'add', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };
}
