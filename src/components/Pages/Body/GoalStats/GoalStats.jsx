import Section from '../Global/Section/Section';

export default function GoalStats() {
    // need to join categories table to get category name
    // need to join time period table to get day_count
    // need to join habit type table to get habit type name (daily, weekly, monthly, etc.)
    // need to join status table to get status (active, inactive, completed)
    const goal = {
        goalCategoryID: '1',
        categoryName: 'Mental Health',
        goalName: 'Journal everyday',
        timePeriodID: '1',
        dayCount: 7,
        habitTypeID: '1',
        habitType: 'Daily',
        habitName: 'Journaling',
        statusID: '1',
        statusName: 'Active',
        created_at: '2022-08-29',
        daysCompleted: 5,
        daysFailed: 1
    };
    // should probably have a days completed column in the habit/goal table - increases by 1 day for every day marked complete
    // use goal id to get all of the habits with status completed

    const createdAtDate = new Date(goal.created_at);

    return (
        <Section>
            <div className="select-none border rounded">
                <div className="flex flex-row justify-between font-bold mb-3">
                    <h3>{goal.goalName}</h3>
                    <span>StatusPill</span>
                </div>
                <div className="flex flex-row justify-between text-sm font-semibold">
                    <span>Habit Name:</span>
                    <span>{goal.habitName}</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                    <span>Target:</span>
                    <span>{goal.dayCount} from {goal.dayCount} Days</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                    <span>Days Completed:</span>
                    <span>{goal.daysCompleted} from {goal.dayCount} Days</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                    <span>Days Failed:</span>
                    <span>{goal.daysFailed} Days</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                    <span>Habit Type:</span>
                    <span>{goal.habitType}</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                    <span>Created On:</span>
                    <span>{createdAtDate.toDateString()}</span>
                </div>
            </div>
        </Section>
    );
}
