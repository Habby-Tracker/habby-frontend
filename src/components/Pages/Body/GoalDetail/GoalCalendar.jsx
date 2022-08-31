import { CalendarPicker, LocalizationProvider } from '@mui/x-date-pickers';
import { calendarActions, useCalendar } from '../../../../State/Hooks/calendar';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

export default function GoalCalendar() {
    const { selectedDate } = useCalendar();
    const { setSelectedDate } = calendarActions();
    const user = { createdAt: new Date() };
    const maxDateForHabit = moment(new Date()).add(2, 'years');

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <CalendarPicker 
                date={moment(selectedDate)} 
                onChange={(date) => setSelectedDate(new Date(date))} 
                minDate={moment(user.createdAt)} 
                maxDate={maxDateForHabit} 
                view={'day'} 
                views={['day']} 
                showDaysOutsideCurrentMonth={true}
                reduceAnimations={true}
            />
        </LocalizationProvider>
    );
}
