import { useCategories } from '../../../../State/Hooks/categories';
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
    const { categories } = useCategories();
    const { goals } = useGoals();

    const categoryData = goals && goals
        .map(goal => goal.category)
        .sort()
        .reduce((acc, category) => {
            // const categoryList = ['Career', 'Education', 'Finance', 'Fitness', 'Health', 'Mental Health', 'Nutrition', 'Other', 'Social', 'Spiritual'];
            acc[category] ? acc[category] += 1 : acc[category] = 1;
            return acc;
        }, {});
    console.log('categoryData', categoryData);
    const dataCat = Object.values(categoryData);
    console.log('data', dataCat);
    

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Legend
    );

    const catData = categories && categories.map(category => category.name).sort();
    console.log('catData', catData);
    
    const data = {
        labels: categories ? categories.map(category => category.name).sort() : null,
        datasets: [
            {
                label: 'Toal Goal Categories',
                data: [6, 9, 8, 5, 6, 6, 6, 7, 8, 5],
                fill: true,
                spanGaps: true,
                backgroundColor: 'hsla(21.6, 100%, 50%, 0.4)',
                borderColor: 'hsla(315, 97%, 26%, 1)',
                borderWidth: 2,
            },
            {
                label: 'Completed Goal Categories',
                data: [2, 4, 5, 2, 1, 3, 2, 5, 1, 2],
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
