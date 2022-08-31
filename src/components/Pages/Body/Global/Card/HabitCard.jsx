import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { habitActions } from '../../../../../State/Hooks/habits';


export default function HabitCard({ habit, completed, width, setEditModal, setDeleteModal }) {
    const [completedState, setCompletedState] = useState(completed);
    const { update } = habitActions();
    const [isOpen, setIsOpen] = useState(false);

    const useOutsideClick = (callback) => {
        const ref = useRef();

        useEffect(() => {
            const handleClick = (e) => {
                if (ref.current && !ref.current.contains(e.target)) {
                    callback();
                }
            };

            document.addEventListener('click', handleClick, true);

            return () => {
                document.removeEventListener('click', handleClick, true);
            };
        }, []);

        return ref;
    };

    const ref = useOutsideClick(() => setIsOpen(false));

    const successText = 'pl-4 w-2/3 text-left text-successGreen line-through';
    const defaultText = 'pl-4 w-2/3 text-left';

    const successBackground = 'flex flex-row w-full h-10 items-center rounded-md bg-successBackground my-2 shadow-md';
    const defaultBackground = 'flex flex-row w-full h-10 items-center rounded-md bg-lightGrey my-2 shadow-md';

    function updateHabit(value) {
        update(habit.id, { statusID: value });
        setCompletedState(!completedState);
    }

    return (
        <div className={completedState ? successBackground : defaultBackground}
            style={{ width }} value={habit.id}>
            <p className={completedState ? successText : defaultText}>{habit.habitName}</p>
            <div className="w-1/3 text-right">
                {completedState ? 
                    <CheckBoxIcon sx={{ color: 'hsla(144, 57%, 33%, 1)' }} onClick={() => updateHabit('1')} />
                    : <CheckBoxOutlineBlankIcon onClick={() =>  updateHabit('3')} /> }
                <MoreVertIcon fontSize="small" onClick={() => setIsOpen(true)} />
                {isOpen &&
                        <div ref={ref} className="absolute z-10">
                            <div className="flex flex-col w-24 bg-white rounded-md shadow-md">
                                <p onClick={() => setEditModal(true)} className="text-sm text-center text-primaryOrange h-10 font-semibold">Edit</p>
                                <p onClick={() => setDeleteModal(true)} className="text-sm text-center text-primaryOrange h-10 font-semibold">Delete</p>
                            </div>
                        </div>}
            </div>
        </div>
    );
}
