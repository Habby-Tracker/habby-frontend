import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useGoals } from '../../../../State/Hooks/goals';

export default function RadarGraph() {
    const { goals } = useGoals();

    const categoryData = goals && goals
        .map(goal => goal.category)
        .sort()
        .reduce((acc, category) => {
            acc[category] ? acc[category] += 1 : acc[category] = 1;
            return acc;
        }, {});
    const dataCat = Object.values(categoryData);
    const labelData = Object.keys(categoryData).sort();

    const completedData = goals && goals
        .filter(goal => goal.statusID === '3' && goal.category)
        .sort()
        .reduce((acc, goal) => {
            acc[goal.category] ? acc[goal.category] += 1 : acc[goal.category] = 1;
            return acc;
        }, {});
    const compData = Object.values(completedData);

    console.log('completedData', completedData);
    console.log('goals', goals);
    console.log('compData', compData);
    

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Legend
    );
    
    const data = {
        labels: labelData ? labelData : ['Career', 'Education', 'Finance', 'Fitness', 'Health', 'Mental Health', 'Nutrition', 'Other', 'Social', 'Spiritual'],
        datasets: [
            {
                label: 'Toal Goal Categories',
                data: dataCat,
                fill: true,
                spanGaps: true,
                backgroundColor: 'hsla(21.6, 100%, 50%, 0.4)',
                borderColor: 'hsla(315, 97%, 26%, 1)',
                borderWidth: 2,
            },
            {
                label: 'Completed Goal Categories',
                data: compData.length >= 3 ? compData : null,
                fill: true,
                spanGaps: true,
                backgroundColor: 'hsla(315, 97%, 17%, .8)',
                borderColor: 'hsla(21.6, 100%, 50%, 1)',
                borderWidth: 2,
            },
            {
                label: '',
                data: [0],
                fill: false,
                z: -100,
                spanGaps: true,
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderWidth: 2,
            }
        ],
    };
   
    return (
        <div className="flex justify-center w-full mb-4 items-center">
            <Radar data={data} />
        </div>
        
    );
}
