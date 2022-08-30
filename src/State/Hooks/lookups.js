import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/DataContext';
import {
    getHabitTypes,
    getStatuses,
    getTimePeriods,
} from '../Services/lookup-service';

export default function useLookups() {
    const { status, timePeriods, habitTypes } = useContext(DataContext);
    const { dispatchStatus, dispatchTimePeriods, dispatchHabitTypes } =
        useContext(DataDispatchContext);
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

            statusData && dispatchStatus({ type: 'load', payload: statusData });
            timePeriodData &&
                dispatchTimePeriods({ type: 'load', payload: timePeriodData });
            habitTypesData &&
                dispatchHabitTypes({ type: 'load', payload: habitTypesData });

            statusData && setStatusError(statusData);
            timePeriodData && setTimePeriodError(timePeriodData);
            habitTypesData && setHabitTypeError(habitTypesData);
        };
        fetchLookups();

        return () => {
            ignore = true;
        };
    }, []);

    return {
        status,
        timePeriods,
        habitTypes,
        statusError,
        timePeriodError,
        habitTypeError,
    };
}
