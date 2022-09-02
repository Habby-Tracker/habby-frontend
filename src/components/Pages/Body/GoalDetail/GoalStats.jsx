import StatusPill from '../Global/StatusPill/StatusPill';

export default function GoalStats({ state }) {
    const { thisGoal, totalHabits, completedHabits, failedHabits, remainingHabits, createdAtDate } = state;
    
    return (
        thisGoal &&
            <div className="select-none p-4 w-full">
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
    );
}
