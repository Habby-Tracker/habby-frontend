import { Outlet } from 'react-router-dom';
import DateSlider from './Body/Dates/DateSlider.jsx';
import Header from './Header/Header.jsx';
import Navigation from './Header/Navigation.jsx';
// import Calendar from './Body/Dates/Calendar.jsx';



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
            {/* <Calendar /> */}
            <main className="flex justify-center bg-white">
                <Outlet />
            </main>
            <div className="flex justify-between space-x-0 md:space-x-">
                <Navigation navigation={nav} />
            </div>
        </div>
    );
}
