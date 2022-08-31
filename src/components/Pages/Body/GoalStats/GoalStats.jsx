// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGoals } from '../../../../State/Hooks/goals';
import { useHabits } from '../../../../State/Hooks/habits';
// import useLookups from '../../../../State/Hooks/lookups';
import Section from '../Global/Section/Section';

export default function GoalStats() {
    // need to join categories table to get category name
    // need to join time period table to get day_count
    // need to join habit type table to get habit type name (daily, weekly, monthly, etc.)
    // need to join status table to get status (active, inactive, completed)
    // should probably have a days completed column in the habit/goal table - increases by 1 day for every day marked complete
    // use goal id to get all of the habits with status completed
    // const [goal, setGoal] = useState({
    //     goalCategoryID: '1',
    //     categoryName: 'Mental Health',
    //     goalName: 'Journal everyday',
    //     timePeriodID: '1',
    //     dayCount: 7,
    //     habitTypeID: '1',
    //     habitType: 'Daily',
    //     habitName: 'Journaling',
    //     statusID: '1',
    //     statusName: 'Active',
    //     created_at: '2022-08-29',
    //     daysCompleted: 5,
    //     daysFailed: 1
    // });

    // const goal = {
    //     goalCategoryID: '1',
    //     categoryName: 'Mental Health',
    //     goalName: 'Journal everyday',
    //     timePeriodID: '1',
    //     dayCount: 7,
    //     habitTypeID: '1',
    //     habitType: 'Daily',
    //     habitName: 'Journaling',
    //     statusID: '1',
    //     statusName: 'Active',
    //     created_at: '2022-08-29',
    //     daysCompleted: 5,
    //     daysFailed: 1
    // };
    // const { status, timePeriod, habitType } = useLookups();
    // // // need to get all habits by goal id
    // const { habits } = useHabits();
    const { id } = useParams();
    const { goals } = useGoals();
    const { habits } = useHabits();
    const thisGoal = goals.filter(goal => goal.id === id);
    const goalHabits = (habits && habits.length) ? habits.filter(habit => habit.goalID === Number(thisGoal.id)) : null;
    const totalHabits = goalHabits && goalHabits.length;
    const completedHabits = goalHabits && goalHabits.filter(habit => habit.statusID === '3').length;
    const createdAtDate = new Date(thisGoal.createdAt).toDateString();
    // const thisStatus = status.filter(status => status.id === thisGoal.statusID);
    // const thisHabitType = habitType.filter(type => type.id === thisGoal.habitTypeID);
    // const thisTimePeriod = timePeriod.filter(period => period.id === thisGoal.timePeriodID);
    // const theseHabits = habits.filter(habit => habit.goalID = thisGoal.id);
    // const completedCount = theseHabits.filter(habit => habit.status === 'Completed');
    // const failedCount = theseHabits.filter(habit => habit.status === 'Incomplete');
    // const createdAtDate = new Date(thisGoal[0].created_at);
    // if (thisHabitType === 'Daily') {
    //     setGoal({ ...goal[0], created_at: createdAtDate.getDateString(), status: thisStatus[0].name, habitType: thisHabitType[0].name, dayCount: thisTimePeriod[0].dayCount });
    // } else if (thisHabitType === 'Weekly') {
    //     setGoal({ ...goal[0], created_at: createdAtDate.getDateString(), status: thisStatus[0].name, habitType: thisHabitType[0].name, weekCount: thisTimePeriod[0].weekCount });
    // } else if (thisHabitType === 'Monthly') {
    //     setGoal({ ...goal[0], created_at: createdAtDate.getDateString(), status: thisStatus[0].name, habitType: thisHabitType[0].name, monthCount: thisTimePeriod[0].monthCount });
    // }
    // // useEffect(() => {
    // // }, []);

    return (
        <Section>
            <div className="select-none border rounded p-4 w-full">
                <div className="flex flex-row justify-between mb-4 font-bold">
                    <h3>{thisGoal.goalName}</h3>
                    <span>StatusPill</span>
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
                    <span>{totalHabits} Days</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                    <span>Created On:</span>
                    <span>{createdAtDate}</span>
                </div>
            </div>
        </Section>
    );
}
