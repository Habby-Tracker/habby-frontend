import CircularProgressWithLabel from '../PieChart/PieChart';
import StatusPill from '../StatusPill/StatusPill';


export default function ProgressCard({ goal, target, width, height, id }) {

    const goalText = 'pl-2 w-full my-2 text-left text-m font-semibold';
    const targetDays = 'pl-2 w-full my-2 text-left text-sm font-normal';
    const progress = (7 / 7) * 100;



    return (
        <div className="flex flex-row w-full items-center rounded-md bg-lightGrey shadow-md"
            style={{ width, height }} value={id}>
            <div className="w-1/5">
                <CircularProgressWithLabel progress={progress} />
            </div>    
            <div className="flex flex-row w-3/5 items-center">
                <div className="w-full items-left">
                    <p className={goalText}>{goal}</p>
                    <p className={targetDays}>{target}</p>
                </div>
            </div>
            <div className="w-1/5 justify-center"> 
                <StatusPill width={'100%'} />            
            </div>
        </div>
    );
}