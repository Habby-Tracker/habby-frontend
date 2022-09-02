import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { useGoals } from '../../../../State/Hooks/goals';

export default function RadarGraph() {
    const { goals } = useGoals();
    const [labelData, setLabelData] = useState([]);
    const [dataCat, setDataCat] = useState([]);
    const [compData, setCompData] = useState([]);

    useEffect(() => {
        const categoryData = goals && goals
            .sort()
            .map(goal => goal.category)
            .reduce((acc, category) => {
                acc[category] ? acc[category] += 1 : acc[category] = 1;
                return acc;
            }, {});
        setDataCat(Object.values(categoryData));
        

        const completedData = goals && goals
            .sort()
            .reduce((acc, goal) => {
                if(!acc[goal.category]) acc[goal.category] = 0;
                if(goal.statusID === '3' && goal.category) acc[goal.category] += 1;
                return acc;
            }, {});
        setCompData(Object.values(completedData));
        setLabelData(Object.keys(completedData));
    }, [goals]);



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
                label: 'Goals Completed',
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
