import { useEffect } from 'react';
import { useState } from 'react';
import DateCard from './DateCard';

export default function Dates() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dates, setDates] = useState([]);
    const prevDate1 = new Date(selectedDate);
    prevDate1.setDate(selectedDate.getDate() - 1);
    const prevDate2 = new Date(selectedDate);
    prevDate2.setDate(selectedDate.getDate() - 2);
    const nextDate1 = new Date(selectedDate);
    nextDate1.setDate(selectedDate.getDate() + 1);
    const nextDate2 = new Date(selectedDate);
    nextDate2.setDate(selectedDate.getDate() + 2);

    useEffect(() => {
        setDates([]);
        setDates([prevDate2, prevDate1, selectedDate, nextDate1, nextDate2]);
    }, [selectedDate]);

    return (
        <div className="flex flex-row justify-center align-center bg-white">
            {dates.map((date, index) => <DateCard key={index} date={date} index={index} setSelectedDate={setSelectedDate} />)
            }
        </div>
    );
}
