import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Modal from '../Global/Form/Modal';
import Section from '../Global/Section/Section';
import AddGoalButton from '../Global/Button/AddGoalButton';
import Hero from '../Hero/Hero';
import DateSlider from '../Dates/DateSlider.jsx';
import { useState } from 'react';
import { useGoals } from '../../../../State/Hooks/goals';

export default function Home() {
    const [modal, setModal] = useState(false);
    const { goals } = useGoals();

    const openModal = () => {
        setModal(true);
    };

    console.log(goals);

    return (
        <div className="flex flex-col justify-center items-center">
            <DateSlider />
            <Hero />
            <Section header="Today's Habits" seeAll={true} width="90vw">
                <HabitCard />
            </Section>
            <Section header="Your Goals" seeAll={true} width="90vw">
                {goals && goals.map((goal) => (<GoalCard key={goal.id} goal={goal} />))}
            </Section>
            {modal ? <Modal setShowModal={setModal} /> : null}
            <AddGoalButton onClick={() => openModal()} />
        </div>
    );
}
