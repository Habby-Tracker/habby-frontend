import { StaticDatePicker, LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

export default function GoalCalendar({ state }) {
    const { goalHabits } = state;
    const sortedHabits = goalHabits && goalHabits.sort((a, b) => {
        if (a.dueDate < b.dueDate) {
            return -1;
        }
        if (a.dueDate > b.dueDate) {
            return 1;
        }
        return 0;
    });
    const selectedDates = sortedHabits && sortedHabits.map(habit => moment(habit.dueDate).format('L'));

    return (
        selectedDates && <div className="h-80 overflow-hidden">
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <StaticDatePicker 
                    readOnly={true}
                    onChange={() => {return;}}
                    minDate={moment(sortedHabits[0].dueDate)} 
                    maxDate={moment(sortedHabits[sortedHabits.length - 1].dueDate)} 
                    openTo={'day'} 
                    views={['day']} 
                    showDaysOutsideCurrentMonth={true}
                    reduceAnimations={true}
                    showToolbar={false}
                    closeOnSelect={true}
                    renderDay={(day, selectedDays, pickersDayProps) => {
                        let selectedSx = { borderRadius: '0' };
                        const dayInMoment = moment(day).format('L');
                        if (selectedDates.some(date => date == String(dayInMoment))) { 
                            selectedSx = { borderRadius: '0', backgroundColor: 'hsla(144, 82%, 47%, 1)', color: 'white', fontWeight: '500' };
                        }
                        return (
                            <PickersDay
                                { ...pickersDayProps }
                                disableMargin={true}
                                sx={selectedSx}
                                selected={false}
                                today={false}
                                disabled={true}
                            /> 
                        );
                    }}
                    renderInput={() => {return;}}
                    className={'last:hidden'}
                />
            </LocalizationProvider>
        </div>
    );
}
