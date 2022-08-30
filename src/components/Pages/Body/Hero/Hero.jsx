import { useEffect, useState } from 'react';
import { useCalendar } from '../../../../State/Hooks/calendar';
import { useHabits } from '../../../../State/Hooks/habits';
import PieChart from '../Global/PieChart/PieChart';

export default function Hero() {
    const textColor = 'hsla(315, 97%, 17%, 1)';
    const { habits } = useHabits();
    const { selectedDate } = useCalendar();
    const [selectedDayHabits, setSelectedDayHabits] = useState();
    const [current, setCurrent] = useState(6);
    const [goal, setGoal] = useState(7);
    const [value, setValue] = useState((current / goal) * 100);

    // useEffect(() => {
    //     setSelectedDayHabits(habits.filter(habit => {
    //         selectedDate.toDateString() === habit.dueDate.toDateString();
    //     }));
    // }, [habits, selectedDate]);

    // useEffect(() => {
    //     const totalHabits = selectedDayHabits.length;
    //     const completedHabits = selectedDayHabits.filter(habit => habit.completedDate);
    //     setCurrent(completedHabits);
    //     setGoal(totalHabits);
    //     setValue((completedHabits / totalHabits) * 100);
    // }, [selectedDayHabits]);

    return (
        <div className="container flex justify-start w-full bg-gradient-to-b from-primaryOrange via-lightOrange to-lightGrey rounded-lg max-h-2/6 py-6 px-10 shadow-lg">
            <PieChart progress={value} size={'8rem'} ringcolor={'hsla(315, 97%, 42%, 0.81)'} textcolor={textColor} textvariant={'h4'}/>
            <p className="text-white text-bold">{value < 50 ? `Hip Hop don't stop! ${current} of ${goal} habits so far` : `Kablam-O you have done ${current} of ${goal} habits so far`}</p>
        </div>
    );
}
