// import Button from '../Global/Button/Button';
// import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Modal from '../Global/Form/Modal';
import Section from '../Global/Section/Section';
import GoalAdded from '../GoalAdded/GoalAdded';
import Hero from '../Hero/Hero';



export default function Home() {
    return (
        <div>
            <Hero />
            <Section header="Today's Habits" seeAll={true} width="90vw">
                <Modal />
            </Section>
            <Section header="Your Goals" seeAll={true} width="90vw">
                <GoalCard
                    goal="50 push ups"
                    target="5 of 7 days target"
                    freq="Everyday"
                    width="100%"
                    height="100px"
                    id={1}
                />
            </Section>
            <GoalAdded />
            <Modal />
        </div>
    );
}
