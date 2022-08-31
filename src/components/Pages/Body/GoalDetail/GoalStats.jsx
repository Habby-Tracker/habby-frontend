import { useParams } from 'react-router-dom';
import { useGoals } from '../../../../State/Hooks/goals';
import { useHabits } from '../../../../State/Hooks/habits';
import Section from '../Global/Section/Section';
import StatusPill from '../Global/StatusPill/StatusPill';

export default function GoalStats() {
    const { id } = useParams();
    const { goals } = useGoals();
    const { habits } = useHabits();
    const today = new Date();
    const thisGoal = (goals && goals.length) ? goals.filter(goal => goal.id === String(id))[0] : null;
    const goalHabits = (thisGoal && habits && habits.length) ? habits.filter(habit => habit.goalID === Number(thisGoal.id)) : null;
    const totalHabits = goalHabits && goalHabits.length;
    const completedHabits = goalHabits && goalHabits.filter(habit => habit.statusID === '3').length;
    const failedHabits = goalHabits && goalHabits.filter(habit => habit.statusID !== '3' && new Date(habit.dueDate) < today).length;
    const remainingHabits = goalHabits && goalHabits.filter(habit => habit.statusID !== '3' && new Date(habit.dueDate) > today).length;
    const createdAtDate = thisGoal && new Date(thisGoal.createdAt).toDateString();

    return (
        thisGoal && <Section>
            <div className="select-none border rounded p-4 w-full">
                <div className="flex flex-row justify-between mb-4 font-bold mx-2">
                    <h3>{thisGoal.goalName}</h3>
                    <div> 
                        <StatusPill progress={completedHabits / totalHabits} width={'70px'}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between text-sm mb-3 font-semibold">
                    <span>Habit Name:</span>
                    <span>{thisGoal.habitName}</span>
                </div>
                <div className="flex flex-row justify-between text-sm mb-3">
                    <span>Target:</span>
                    <span>{totalHabits} from {totalHabits} Days</span>
                </div>
                <div className="flex flex-row justify-between text-sm mb-3">
                    <span>Days Completed:</span>
                    <span>{completedHabits} from {totalHabits} Days</span>
                </div>
                <div className="flex flex-row justify-between text-sm mb-3">
                    <span>Days Failed:</span>
                    <span>{failedHabits} Days</span>
                </div>
                <div className="flex flex-row justify-between text-sm mb-3">
                    <span>Days Remaining:</span>
                    <span>{remainingHabits} Days</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                    <span>Created On:</span>
                    <span>{createdAtDate}</span>
                </div>
            </div>
        </Section>
    );
}
