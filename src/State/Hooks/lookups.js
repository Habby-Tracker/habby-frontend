import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/dataContext';
import { getHabitTypes, getStatuses, getTimePeriods } from '../Services/lookup-service';

export default function useLookups() {
    const { statuses, timePeriods, habitTypes } = useContext(DataContext);
    const { dispatch } = useContext(DataDispatchContext);
    const [statusError, setStatusError] = useState(null);
    const [timePeriodError, setTimePeriodError] = useState(null);
    const [habitTypeError, setHabitTypeError] = useState(null);

    useEffect(() => {
        if (statuses && timePeriods && habitTypes) return;

        let ignore = false;

        const fetchLookups = async () => {
            const statusData = await getStatuses();
            const timePeriodData = await getTimePeriods();
            const habitTypesData = await getHabitTypes();

            if (ignore) return;
            
            statusData.body && dispatch({ type: 'load', payload: statusData.body });
            timePeriodData.body && dispatch({ type: 'load', payload: timePeriodData.body });
            habitTypesData.body && dispatch({ type: 'load', payload: habitTypesData.body });

            statusData.error && setStatusError(statusData.error);
            timePeriodData.error && setTimePeriodError(timePeriodData.error);
            habitTypesData.error && setHabitTypeError(habitTypesData.error);
        };
        fetchLookups();
        
        return () => {
            ignore = true; 
        };
    }, []);

    return { statuses, timePeriods, habitTypes, statusError, timePeriodError, habitTypeError };
}
