import { useHabits } from '../../../../../State/Hooks/habits';
import CircularProgressWithLabel from '../PieChart/PieChart';
import StatusPill from '../StatusPill/StatusPill';


export default function ProgressCard({ goal, width, height }) {

    const goalText = 'pl-2 w-full my-2 text-left text-m font-semibold';
    const targetDays = 'pl-2 w-full my-2 text-left text-sm font-normal';
    const { habits } = useHabits();
    const goalHabits = (habits && habits.length) ? habits.filter(habit => habit.goalID === Number(goal.id)) : null;
    const totalHabits = goalHabits && goalHabits.length;
    const completedHabits = goalHabits && goalHabits.filter(habit => habit.statusID === '3').length;
    const progress = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0; 


    return (
        <div className="flex flex-row w-full items-center rounded-md bg-lightGrey shadow-md py-4"
            style={{ width, height }} value={goal.id}>
            <div className="w-1/5">
                <CircularProgressWithLabel 
                    progress={progress} 
                    size={'48px'} 
                    textvariant={'caption'}
                    ringcolor={'hsla(315, 97%, 42%, 0.81)'} 
                />
            </div>    
            <div className="flex flex-row w-3/5 items-center">
                <div className="w-full items-left">
                    <p className={goalText}>{goal.goalName}</p>
                    <p className={targetDays}>{completedHabits} from {totalHabits} days target</p>
                </div>
            </div>
            <div className="w-1/5 justify-center px-2"> 
                <StatusPill width={'100%'} />            
            </div>
        </div>
    );
}
