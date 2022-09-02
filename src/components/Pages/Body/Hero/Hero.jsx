import { useCalendar } from '../../../../State/Hooks/calendar';
import PieChart from '../Global/PieChart/PieChart';

export default function Hero() {
    const textColor = 'hsla(315, 97%, 17%, 1)';
    const { selectedDateHabits } = useCalendar();
    const current = selectedDateHabits ? selectedDateHabits.filter(habit => habit.statusID === '3').length : 0;
    const goal = selectedDateHabits ? selectedDateHabits.length : 0;
    const value = current > 0 ? (current / goal) * 100 : 1.99;


    return (
        <div className="container flex items-center w-11/12 bg-heroPattern bg-cover rounded-lg h-40 py-6 px-10 shadow-lg" >
            <div data-tour="step-6">
                <PieChart progress={value} size={'8rem'} ringcolor={'hsla(315, 97%, 42%, 0.81)'} textcolor={textColor} textvariant={'h4'}/>
            </div>
            <p className="text-white text-bold pl-4">{value < 50 ? `Hip Hop don't stop! ${current} of ${goal} habits so far today` : `Kablam-O you have done ${current} of ${goal} habits so far today`}</p>
        </div>
    );
}
