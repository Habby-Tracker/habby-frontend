export default function DateCard({ date, index, setSelectedDate }) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function getShortMonthName(monthIndex) {
        return monthNames[monthIndex];
    }

    function handleChangeDate(date) {
        setSelectedDate(new Date(date));
    }
    return (
        index === 2 ? 
            <div key={index} className="flex flex-col pt-2 pb-4 px-4 m-1 bg-primaryOrange/[.15] border border-primaryOrange/[.15] rounded select-none hover:cursor-default">
                <span className="text-primaryOrange text-lg font-bold">{date.getDate()}</span>
                <span className="text-primaryOrange text-sm font-light leading-3">{getShortMonthName(date.getMonth())}</span>
            </div>
            :
            <div key={index} className="flex flex-col pt-2 pb-4 px-4 m-1 bg-white border border-gray-200 rounded select-none sm:hover:bg-primaryOrange/[.15] sm:hover:border-primaryOrange/[.15] hover:cursor-pointer" onClick={() => handleChangeDate(date)}>
                <span className="text-lg font-semibold">{date.getDate()}</span>
                <span className="text-sm font-light leading-3">{getShortMonthName(date.getMonth())}</span>
            </div>
    );
}
