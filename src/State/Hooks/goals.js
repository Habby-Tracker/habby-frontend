import { getNextCursorPosition } from '@testing-library/user-event/dist/types/utils';
import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/dataContext';
import { getGoals } from '../Services/goals-service';

export default function useGoals() {
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
