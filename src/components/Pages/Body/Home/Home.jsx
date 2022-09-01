import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Section from '../Global/Section/Section';
import AddGoalButton from '../Global/Button/AddGoalButton';
import Hero from '../Hero/Hero';
import DateSlider from '../Dates/DateSlider.jsx';
import { useState } from 'react';
import CreateGoalModal from './Modals/CreateGoalModal';
import EditGoalModal from './Modals/EditGoalModal';
import DeleteModal from './Modals/DeleteModal';
import { useCalendar } from '../../../../State/Hooks/calendar';    
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useTour } from '@reactour/tour';

export default function Home() {
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const { setIsOpen } = useTour();
    const { selectedDateHabits, selectedDateGoals } = useCalendar();

    const openModal = () => {
        setModal(true);
    };
    
    return (
        <>
            <button className="flex absolute top-20 right-4" data-tour="step-1" onClick={() => setIsOpen(true)}>
                <HelpOutlineIcon />
            </button><div className="flex flex-col justify-center items-center py-4">
                <DateSlider />
                <Hero />
                <div data-tour="step-4">
                    <Section header="Today's Habits" seeAll={true} width="90vw">
                        {selectedDateHabits && selectedDateHabits.map((habit) => <HabitCard 
                            key={`habit card${habit.id}`} habit={habit} completed={habit.statusID === '3' ? true : false} 
                            setEditModal={setEditModal} setDeleteModal={setDeleteModal} setActiveItem={setActiveItem} />)}
                    </Section>
                </div>
                <div data-tour="step-3">
                    <Section header="Your Goals" seeAll={true} width="90vw" marginBottom={'7vh'}>
                        {selectedDateGoals && selectedDateGoals.map((goal) => <GoalCard
                            key={`goal card${goal.id}`} goal={goal}
                            setEditModal={setEditModal} setDeleteModal={setDeleteModal} setActiveGoal={setActiveItem} />)}
                    </Section>
                </div>
                {modal && <CreateGoalModal setModal={setModal} />}
                {editModal && <EditGoalModal setEditModal={setEditModal} activeGoal={activeItem} />}
                {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} activeItem={activeItem} />}
                <AddGoalButton onClick={() => openModal()} />
            </div></>
    );
}
