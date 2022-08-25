import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import './global.css';
import './reset.css';


export default function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
