import { Outlet } from 'react-router-dom';
import Dates from './Body/Dates/Dates.jsx';
import Header from './Header/Header.jsx';


export default function Layout() {
    return (
        <div className="container flex-col text-black 
        text-center justify-space 
        mx-auto md:bg-transparent">
            <Header />
            <Dates />
            <main className="flex justify-center">
                <Outlet />
            </main>
        </div>
    );
}
