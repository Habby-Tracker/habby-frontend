import { useCalendar } from '../../../../State/Hooks/calendar';
import DateCard from './DateCard';

export default function DateSlider() {
    const { dates } = useCalendar();

    return (
        <div className="flex flex-row justify-center align-center bg-white md:hidden">
            {dates.map((date, index) => <DateCard key={`dateSlider${index}`} date={date} index={index} />)
            }
        </div>
    );
}
