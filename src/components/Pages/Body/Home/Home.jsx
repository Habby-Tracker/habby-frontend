import Button from '../Global/Button/Button';
import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Section from '../Global/Section/Section';
import GoalAdded from '../GoalAdded/GoalAdded';
import Progress from '../Progress/Progress';

export default function Home() {
    return (
        <div>
            <p>Home Page</p>
            <Section header="Today's Habits" seeAll={true} width="90vw">
                <HabitCard text="Go to the gym" completed={false} width="100%" height="100px" id={1}/>
                <Button text="Button" width={'80%'}/>
            </Section>
            <Section header = "Your Goals" seeAll={true} width="90vw">
                <GoalCard goal="50 push ups" target="5 of 7 days target" freq="Everyday" width="100%" height="100px" id={1}/>
            </Section>
            <br></br>
            <GoalAdded />
            <Progress />
        </div>
    );
}
