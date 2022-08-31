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

export default function RadarGraph() {
    const { categories } = useCategories();
    console.log('categories', categories);

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Legend
    );
    
    const data = {
        labels: [
            'Health',
            'Fitness',
            'Nutrition',
            'Mental Health',
            'Social',
            'Career',
            'Finance',
            'Education',
            'Spiritual',
            'Other'],
        datasets: [
            {
                label: 'Completed Goal Categories',
                data: [6, 9, 8, 5, 6, 6, 6, 7, 8, 5],
                fill: true,
                spanGaps: true,
                backgroundColor: 'hsla(21.6, 100%, 50%, 0.4)',
                borderColor: 'hsla(315, 97%, 26%, 1)',
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
