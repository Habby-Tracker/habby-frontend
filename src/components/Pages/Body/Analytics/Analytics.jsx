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
    const value = current > 0 ? (current / goal) * 100 : 2;


    return (
        <div className="flex flex-col min-w-full items-center md:items-start">
            <h1 className="text-purple text-bold text-3xl flex justify-start px-6">Analytics</h1>
            <div className="flex w-full md:flex-row">
                <Section 
                    subText="A section to detail the users progress"  
                    width="100%">
                    <div className="container flex justify-center items-center flex-col mx-auto md:justify-start md:w-50%">
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
                <section className="container hidden bg-growing bg-contain bg-center bg-no-repeat flex-col items-center
        py-2 px-4 rounded shadow-lg my-3 md:flex-row md:flex-wrap md:flex" >
                    <div className="hidden  mx-6 md:items-center md:flex ">
                        <p>
                            {`"Keep track of all your habits and goals!
                            Studies show people who do stuff are happier!"
                            -Ghandi`}                       
                        </p>
                    
                    </div> 
                </section>
            </div>
            
            <div className="pb-16 w-full md:flex">
                <Section 
                    header="Your Stats"
                    width="100%"
                >
                    <RadarGraph />
                </Section>

                <Section
                    header="Current Goals"  
                    maxWidth="100%" >
                    
                    {goals && goals.map((goal) => <ProgressCard key={`goal card${goal.id}`} goal={goal} height={'125px'} width={'375px'} />)}
                </Section>
            </div>
        </div>
    );
}
