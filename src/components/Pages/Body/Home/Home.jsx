import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Section from '../Global/Section/Section';
import AddGoalButton from '../Global/Button/AddGoalButton';
import Hero from '../Hero/Hero';
import DateSlider from '../Dates/DateSlider.jsx';
import { useState } from 'react';
import { useGoals } from '../../../../State/Hooks/goals';
import CreateGoalModal from './Modals/CreateGoalModal';
import EditGoalModal from './Modals/EditGoalModal';
import DeleteGoalModal from './Modals/DeleteGoalModal';
import { useCalendar } from '../../../../State/Hooks/calendar';

export default function Home() {
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);


    const { goals } = useGoals();
    const { selectedDateHabits } = useCalendar();

    const openModal = () => {
        setModal(true);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <DateSlider />
            <Hero />
            <Section header="Today's Habits" seeAll={true} width="90vw">
                {selectedDateHabits && selectedDateHabits.map((habit) => <HabitCard key={`habit card${habit.id}`} habit={habit} completed={habit.statusID === '3' ? true : false} />)}
            </Section>
            <Section header="Your Goals" seeAll={true} width="90vw">
                {goals && goals.map((goal) => 
                    <GoalCard 
                        key={`goal card${goal.id}`} goal={goal} 
                        setEditModal={setEditModal} setDeleteModal={setDeleteModal} />)}
            </Section>
            {modal && <CreateGoalModal setModal={setModal} />}
            {editModal && <EditGoalModal setEditModal={setEditModal} />}
            {deleteModal && <DeleteGoalModal setDeleteModal={setDeleteModal} />}
            <AddGoalButton onClick={() => openModal()} />
        </div>
    );
}
