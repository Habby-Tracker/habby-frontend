import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProgressBar from '../ProgressBar/ProgressBar';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function GoalCard({ goal, target, freq, width, height, id }) {

    const goalText = 'pl-4 w-2/3 text-left text-sm font-semibold';
    const targetDays = 'pl-4 w-2/3 text-left text-sm font-normal';
    const frequency = 'pl-4 w-2/3 text-left text-primaryOrange text-sm font-normal';
    const progress = (5 / 7) * 100;



    return (
        <div className="flex flex-col w-full h-10 items-center rounded-md bg-lightGrey my-2 shadow-md"
            style={{ width, height }} value={id}>
            <div className="flex flex-row w-full h-10 items-center">
                <p className={goalText}>{goal}</p>
                <div className="w-1/3 text-right">
                    <MoreVertIcon fontSize="small" />
                </div>
            </div>
            <div className="w-full justify-center"> 
                <ProgressBar progress={progress}/>
                <div className="w-full items-left">
                    <p className={targetDays}>{target}</p>
                    <p className={frequency}>{freq}</p>
                </div>
            </div>
        </div>
    );
}
