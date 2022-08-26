import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function GoalCard({ goal, target, freq, width, height, id }) {

    const goalText = 'pl-4 w-2/3 text-left text-sm font-semibold';
    const targetDays = 'pl-4 w-2/3 text-left text-sm font-normal';
    const frequency = 'pl-4 w-2/3 text-left text-primaryOrange text-sm font-normal';

    return (
        <div className="flex flex-col w-full h-10 items-center rounded-md bg-lightGrey my-2 shadow-md"
            style={{ width, height }} value={id}>
            <div className="flex flex-row w-full h-10 items-center">
                <p className={goalText}>{goal}</p>
                <div className="w-1/3 text-right">
                    <MoreVertIcon fontSize="small" />
                </div>
            </div>
            <div className="w-full items-left "> 
                <div>
                (progress bar)
                </div>
                <p className={targetDays}>{target}</p>
                <p className={frequency}>{freq}</p>
            </div>
        </div>
    );
}
