import { useCalendar } from '../../../../State/Hooks/calendar';
import DateCard from './DateCard';

export default function Dates() {
    const { dates } = useCalendar();

    return (
        <div className="flex flex-row justify-center align-center bg-white">
            {dates.map((date, index) => <DateCard key={index} date={date} index={index} />)
            }
        </div>
    );
}
