import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { habitActions } from '../../../../../State/Hooks/habits';


export default function HabitCard({ habit, completed, width, setEditModal, setDeleteModal, setActiveItem }) {
    const [completedState, setCompletedState] = useState(completed);
    const { updateHabit } = habitActions();
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

    const successText = 'pl-4 w-full text-left text-successGreen line-through';
    const defaultText = 'pl-4 w-full text-left';

    const successBackground = 'flex flex-row w-full h-10 items-center rounded-md bg-successBackground my-2 shadow-md';
    const defaultBackground = 'flex flex-row w-full h-10 items-center rounded-md bg-lightGrey my-2 shadow-md';

    function updateHabitInCard(value) {
        updateHabit(habit.id, { statusID: value, completedDate: new Date() });
        setCompletedState(!completedState);
    }

    function openModal(modalFunction) {
        modalFunction(true);
        setActiveItem(habit);
    }

    return (
        <div className={completedState ? successBackground : defaultBackground}
            style={{ width }} value={habit.id}>
            <p className={completedState ? successText : defaultText}>{habit.habitName}</p>
            <div data-tour="step-5" className="w-16 text-right mr-1">
                {completedState ? 
                    <CheckBoxIcon sx={{ color: 'hsla(144, 57%, 33%, 1)' }} onClick={() => updateHabitInCard('1')} className="cursor-pointer" />
                    : <CheckBoxOutlineBlankIcon onClick={() =>  updateHabitInCard('3')} className="cursor-pointer"/> }
                <MoreVertIcon fontSize="small" onClick={() => setIsOpen(true)} className="cursor-pointer"/>
                {isOpen &&
                        <div ref={ref} className="absolute z-10">
                            <div className="flex flex-col w-24 bg-white rounded-md shadow-md">
                                <p onClick={() => openModal(setEditModal)} className="text-sm text-center text-primaryOrange h-10 font-semibold mt-4 cursor-pointer">Edit</p>
                                <p onClick={() => openModal(setDeleteModal)} className="text-sm text-center text-primaryOrange h-10 font-semibold cursor-pointer">Delete</p>
                            </div>
                        </div>}
            </div>
        </div>
    );
}
