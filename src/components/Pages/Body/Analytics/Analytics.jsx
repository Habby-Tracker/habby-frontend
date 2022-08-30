import { useGoals } from '../../../../State/Hooks/goals';
import PieChart from '../Global/PieChart/PieChart';
import Section from '../Global/Section/Section';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ProgressCard from '../Global/Card/ProgressCard';

export default function List() {
    const { goals } = useGoals();
    const complete = 50;
    const goal = 60;
    const progress = (complete / goal) * 100;

    return (
        <div className="flex flex-col min-w-full">
            <Section
                header="Analytics"
                subText="A section to detail the users progress"  
                maxWidth="100%">
                <div className="container flex justify-center items-center flex-col mx-auto">
                    <PieChart
                        progress={progress}
                        size={'150px'}
                        ringcolor={'hsla(21.6, 100%, 50%, 1)'}
                        textcolor={'hsla(315, 97%, 26%, 1)'}
                        textvariant={'h3'}
                    />
                    <p className="text-primaryOrange text-sm text-bold flex">
                        <CheckIcon /> {`${complete} Habits have been completed!`}
                    </p>
                    <p className="text-primaryBlack text-sm text-bold flex">
                        <CloseIcon /> {`You are still working on ${goal - complete} Habits!`}
                    </p>
                </div>
                
            </Section>
            <Section
                header="Current Goals"  
                maxWidth="100%" >
                {goals && goals.map((goal) => <ProgressCard key={`goal card${goal.id}`} goal={goal.goalName} target={50} />)}
            </Section>
        </div>
    );
}
