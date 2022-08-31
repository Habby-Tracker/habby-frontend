import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Section from '../Global/Section/Section';
import AddGoalButton from '../Global/Button/AddGoalButton';
import Hero from '../Hero/Hero';
import DateSlider from '../Dates/DateSlider.jsx';
import { useState } from 'react';
import { useGoals } from '../../../../State/Hooks/goals';
import CreateGoalModal from './Modals/CreateGoalModal';
import { useCalendar } from '../../../../State/Hooks/calendar';

export default function Home() {
    const [modal, setModal] = useState(false);
    const { goals } = useGoals();
    const { selectedDateHabits } = useCalendar();

    const openModal = () => {
        setModal(true);
    };

    console.log(selectedDateHabits);

    return (
        <div className="flex flex-col justify-center items-center py-4">
            <DateSlider />
            <Hero />
            <Section header="Today's Habits" seeAll={true} width="90vw">
                {selectedDateHabits && selectedDateHabits.map((habit) => <HabitCard key={`habit card${habit.id}`} habit={habit} completed={habit.statusID === '3' ? true : false} />)}
            </Section>
            <Section header="Your Goals" seeAll={true} width="90vw">
                {goals && goals.map((goal) => <GoalCard key={`goal card${goal.id}`} goal={goal} />)}
            </Section>
            {modal && <CreateGoalModal setModal={setModal} />}
            <AddGoalButton onClick={() => openModal()} />
        </div>
    );
}
