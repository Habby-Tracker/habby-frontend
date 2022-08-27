import { Outlet } from 'react-router-dom';
import PieChart from './Body/Global/PieChart/PieChart.jsx';
import Dates from './Body/Dates/Dates.jsx';
import Header from './Header/Header.jsx';
import Navigation from './Header/Navigation.jsx';



export default function Layout() {

    const nav = [
        { to: '/', label: 'home',  },
        { to: 'analytics', label: 'analytics' },
        { to: 'settings', label: 'settings' },
    ];

    const value = (4 / 7) * 100 ;
    
    

    return (
        <div className="container flex-col text-black 
        bg-purple text-center justify-space md:bg-transparent 
        mx-auto w-fit">
            <Header />
            <Dates />
            <main className="flex justify-center bg-white">
                <Outlet />
            </main>
            <div className="flex justify-between space-x-0 md:space-x-">
                <Navigation navigation={nav} />
            </div>
        </div>
    );
}
