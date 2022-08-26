import { useEffect } from 'react';
import { useState } from 'react';

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

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function getShortMonthName(monthIndex) {
        return monthNames[monthIndex];
    }
    useEffect(() => {
        setDates([]);
        setDates([prevDate2, prevDate1, selectedDate, nextDate1, nextDate2]);
    }, [selectedDate]);
    
    function handleChangeDate(date) {
        setSelectedDate(new Date(date));
    }
    return (<div autoFocus={true} className="flex flex-row justify-center align-center bg-white">
        {dates.map((date, index) => {
            if (index === 2) { 
                return (
                    <div key={index} className="flex flex-col pt-2 pb-4 px-4 m-1 bg-primaryOrange/[.15] border border-primaryOrange/[.15] rounded select-none hover:cursor-default">
                        <span className="text-primaryOrange text-lg font-bold">{date.getDate()}</span>
                        <span className="text-primaryOrange text-sm font-light leading-3">{getShortMonthName(date.getMonth())}</span>
                    </div>
                );
            } else {
                return (
                    <div key={index} className="flex flex-col pt-2 pb-4 px-4 m-1 bg-white border border-gray-200 rounded select-none sm:hover:bg-primaryOrange/[.15] sm:hover:border-primaryOrange/[.15] hover:cursor-pointer" onClick={() => handleChangeDate(date)}>
                        <span className="text-lg font-semibold">{date.getDate()}</span>
                        <span className="text-sm font-light leading-3">{getShortMonthName(date.getMonth())}</span>
                    </div>
                );
            }
        })
        }
    </div>
    );
}
