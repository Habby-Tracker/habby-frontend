import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/dataContext';
import { getHabitTypes, getStatuses, getTimePeriods } from '../Services/lookup-service';

export default function useLookups() {
    const { status, timePeriods, habitTypes } = useContext(DataContext);
    const { dispatchStatus, dispatchTimePeriods, dispatchHabitTypes } = useContext(DataDispatchContext);
    const [statusError, setStatusError] = useState(null);
    const [timePeriodError, setTimePeriodError] = useState(null);
    const [habitTypeError, setHabitTypeError] = useState(null);

    useEffect(() => {
        if (status && timePeriods && habitTypes) return;

        let ignore = false;

        const fetchLookups = async () => {
            const statusData = await getStatuses();
            const timePeriodData = await getTimePeriods();
            const habitTypesData = await getHabitTypes();

            if (ignore) return;
            
            statusData.body && dispatchStatus({ type: 'load', payload: statusData.body });
            timePeriodData.body && dispatchTimePeriods({ type: 'load', payload: timePeriodData.body });
            habitTypesData.body && dispatchHabitTypes({ type: 'load', payload: habitTypesData.body });

            statusData.error && setStatusError(statusData.error);
            timePeriodData.error && setTimePeriodError(timePeriodData.error);
            habitTypesData.error && setHabitTypeError(habitTypesData.error);
        };
        fetchLookups();
        
        return () => {
            ignore = true; 
        };
    }, []);

    return { status, timePeriods, habitTypes, statusError, timePeriodError, habitTypeError };
}
