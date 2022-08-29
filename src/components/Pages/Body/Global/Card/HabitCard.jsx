import { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function HabitCard({ text, completed, width, id }) {
    const [completedState, setCompletedState] = useState(completed);

    const successText = 'pl-4 w-2/3 text-left text-successGreen line-through';
    const defaultText = 'pl-4 w-2/3 text-left';

    const successBackground = 'flex flex-row w-full h-10 items-center rounded-md bg-successBackground my-2 shadow-md';
    const defaultBackground = 'flex flex-row w-full h-10 items-center rounded-md bg-lightGrey my-2 shadow-md';


    return (
        <div className={completedState ? successBackground : defaultBackground}
            style={{ width }} value={id}>
            <p className={completedState ? successText : defaultText}>{text}</p>
            <div className="w-1/3 text-right">
                {completedState ? 
                    <CheckBoxIcon sx={{ color: 'hsla(144, 57%, 33%, 1)' }} onClick={() => setCompletedState(false)} />
                    : <CheckBoxOutlineBlankIcon onClick={() => setCompletedState(true)} /> }
                <MoreVertIcon />
            </div>
        </div>
    );
}
