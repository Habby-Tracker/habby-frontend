import { useGoals } from '../../../../State/Hooks/goals';
import PieChart from '../Global/PieChart/PieChart';
import Section from '../Global/Section/Section';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ProgressCard from '../Global/Card/ProgressCard';
import { useHabits } from '../../../../State/Hooks/habits';
import RadarGraph from './RadarGraph';

export default function List() {
    const { goals } = useGoals();
    const { habits } = useHabits();
    const current = habits ? habits.filter(habit => habit.statusID === '3').length : 0;
    const nonComplete = habits ? habits.filter(habit => habit.statusID !== '3').length : 0;
    const goal = habits ? habits.length : 0;
    const value = current > 0 ? (current / goal) * 100 : 5;


    return (
        <div className="flex flex-col min-w-full">
            <h1 className="text-purple text-bold text-3xl flex justify-start px-6">Analytics</h1>
            
            <Section
                subText="A section to detail the users progress"  
                maxWidth="100%">
                <div className="container flex justify-center items-center flex-col mx-auto">
                    <PieChart
                        progress={value}
                        size={'150px'}
                        ringcolor={'hsla(21.6, 100%, 50%, 1)'}
                        textcolor={'hsla(315, 97%, 26%, 1)'}
                        textvariant={'h3'}
                    />
                    <p className="text-primaryOrange text-sm text-bold flex">
                        <CheckIcon /> {`${current} Habits have been completed!`}
                    </p>
                    <p className="text-orangeGrey text-sm text-bold flex">
                        <CloseIcon /> {`You are still working on ${nonComplete} Habits!`}
                    </p>
                </div>
                
            </Section>
            <Section
                header="Current Goals"  
                maxWidth="100%" >
                {goals && goals.map((goal) => <ProgressCard key={`goal card${goal.id}`} goal={goal.goalName} target={50} />)}
            </Section>
            <Section 
                header="Your Stats"
                maxWidth="90%"
            >
                <RadarGraph />
            </Section>
        </div>
    );
}
