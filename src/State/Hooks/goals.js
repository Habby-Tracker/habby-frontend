import { useContext } from 'react';
import { DataContext, DataDispatchContext } from '../Context/dataContext';
import { getGoals } from '../Services/goals-service';

export default function useGoals() {
    const { goals } = useContext(DataContext);
    const { dispatch } = useContext(DataDispatchContext);

    useEffect(() => {
        if (goals) return;
      let ignore = false;
      const fetchGoals = async () => {
        const goals = await getGoals();
        if (ignore) return
        return () => {
            second;
        };
    }, [third]);

    return <div>goals</div>;
}
