import { useParams } from 'react-router-dom';
import { useGoals } from '../../../../State/Hooks/goals';
import { useHabits } from '../../../../State/Hooks/habits';
import Section from '../Global/Section/Section';
import GoalCalendar from './GoalCalendar';
import GoalStats from './GoalStats';

export default function GoalDetail() {
    const { id } = useParams();
    const { goals } = useGoals();
    const { habits } = useHabits();
    const today = new Date();
    const thisGoal = (goals && goals.length) ? goals.filter(goal => goal.id === String(id))[0] : null;
    const goalHabits = (thisGoal && habits && habits.length) ? habits.filter(habit => habit.goalID === Number(thisGoal.id)) : null;
    const totalHabits = goalHabits && goalHabits.length;
    const completedHabits = goalHabits && goalHabits.filter(habit => habit.statusID === '3').length;
    const failedHabits = goalHabits && goalHabits.filter(habit => habit.statusID !== '3' && new Date(habit.dueDate).toDateString() < today.toDateString()).length;
    const remainingHabits = goalHabits && goalHabits.filter(habit => habit.statusID !== '3' && new Date(habit.dueDate).toDateString() >= today.toDateString()).length;
    const createdAtDate = thisGoal && new Date(thisGoal.createdAt).toDateString();

    const values = { id, goals, habits, today, thisGoal, goalHabits, totalHabits, completedHabits, failedHabits, remainingHabits, createdAtDate };
    
    return (
        <div>
            <Section width="100%">
                <GoalCalendar state={values} />
            </Section>
            <Section>
                <GoalStats state={values} />
            </Section>
        </div>
    );
}
