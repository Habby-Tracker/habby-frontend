import { Outlet } from 'react-router-dom';
import PieChart from './Body/Global/PieChart/PieChart.jsx';
import DateSlider from './Body/Dates/DateSlider.jsx';
import Header from './Header/Header.jsx';
import Navigation from './Header/Navigation.jsx';
import Calendar from './Body/Dates/Calendar.jsx';



export default function Layout() {

    const nav = [
        { to: '/', label: 'home',  },
        { to: 'analytics', label: 'analytics' },
        { to: 'settings', label: 'settings' },
    ];

    return (
        <div className="container flex-col text-black 
        bg-purple text-center justify-space md:bg-transparent 
        mx-auto w-fit">
            <Header />
            <DateSlider />
            <Calendar />
            <main className="flex justify-center bg-white">
                <Outlet />
            </main>
            <footer className="container flex justify-center bg-white w-full md:hidden">
                <div className="flex justify-between space-x-0 md:space-x-6">
                    <Navigation navigation={nav} />
                    <PieChart progress={50}/>
                </div>
            </footer>
        </div>
    );
}
