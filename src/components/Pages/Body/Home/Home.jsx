import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Section from '../Global/Section/Section';
import AddGoalButton from '../Global/Button/AddGoalButton';
import Hero from '../Hero/Hero';
import DateSlider from '../Dates/DateSlider.jsx';
import { useState } from 'react';
import CreateGoalModal from './Modals/CreateGoalModal';
import EditGoalModal from './Modals/EditGoalModal';
import DeleteGoalModal from './Modals/DeleteGoalModal';
import { useCalendar } from '../../../../State/Hooks/calendar';
import GoalStats from '../GoalStats/GoalStats';

export default function Home() {
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [activeGoal, setActiveGoal] = useState(null);

    const { selectedDateHabits, selectedDateGoals } = useCalendar();

    const openModal = () => {
        setModal(true);
    };
    
    return (
        <div className="flex flex-col justify-center items-center py-4">
            <DateSlider />
            <Hero />
            <GoalStats />
            <Section header="Today's Habits" seeAll={true} width="90vw">
                {selectedDateHabits && selectedDateHabits.map((habit) => <HabitCard key={`habit card${habit.id}`} habit={habit} completed={habit.statusID === '3' ? true : false} />)}
            </Section>
            <Section header="Your Goals" seeAll={true} width="90vw">
                {selectedDateGoals && selectedDateGoals.map((goal) => 
                    <GoalCard 
                        key={`goal card${goal.id}`} goal={goal} 
                        setEditModal={setEditModal} setDeleteModal={setDeleteModal} setActiveGoal={setActiveGoal} />)}
            </Section>
            {modal && <CreateGoalModal setModal={setModal} />}
            {editModal && <EditGoalModal setEditModal={setEditModal} activeGoal={activeGoal} />}
            {deleteModal && <DeleteGoalModal setDeleteModal={setDeleteModal} activeGoal={activeGoal}/>}
            <AddGoalButton onClick={() => openModal()} />
        </div>
    );
}
