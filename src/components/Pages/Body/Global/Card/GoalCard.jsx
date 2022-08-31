import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHabits } from '../../../../../State/Hooks/habits';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function GoalCard({ goal, width, height }) {
    const goalText = 'pl-4 w-2/3 text-left text-sm font-semibold';
    const targetDays = 'pl-4 w-2/3 text-left text-sm font-normal';
    const frequency = 'pl-4 w-2/3 text-left text-primaryOrange text-sm font-normal';

    const { habits } = useHabits();
    const goalHabits = (habits && habits.length) ? habits.filter(habit => habit.goalID === Number(goal.id)) : null;
    const totalHabits = goalHabits && goalHabits.length;
    const completedHabits = goalHabits && goalHabits.filter(habit => habit.statusID === '3').length;
    const progress = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0; 

    return (
        <div className="flex flex-col w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md"
            style={{ width, height }} value={goal.id}>
            <div className="flex flex-row w-full items-center">
                <p className={goalText}>{goal.goalName}</p>
                <div className="w-1/3 text-right">
                    <MoreVertIcon fontSize="small" />
                </div>
            </div>
            <div className="w-full justify-center"> 
                <ProgressBar progress={progress} barColor={'hsla(144, 82%, 47%, 1)'} textColor={'hsla(100, 0%, 98%, 0.75)'}/>
                <div className="w-full items-left">
                    <p className={targetDays}>{goal.habitTypeId}</p>
                    <p className={frequency}>{goal.habitName}</p>
                </div>
            </div>
        </div>
    );
}
