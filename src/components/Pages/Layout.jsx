import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';


export default function Layout() {
    return (
        <div className="container flex-col text-black bg-primaryOrange text-center justify-space mx-auto">
            <Header />
            <main className="flex justify-center">
                <Outlet />
            </main>
        </div>
    );
}
