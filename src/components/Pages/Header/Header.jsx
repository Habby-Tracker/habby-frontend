import { Link } from 'react-router-dom';
import Logout from './Logout';

export default function Header() {

    return (
        <>
            <header className="flex justify-left space-x-0 md:space-x-6 px-4 py-2 bg-gradient-to-br from-primaryOrange to-lightOrange">
                <div data-tour="step-7">
                    <img src="/imgs/habbylogo.png" alt="Habby Logo" className="h-12 md:h-20" />   
                </div>
                <div className="text-purple hidden pt-6 text-xl absolute 
                space-x-4 right-20 hover:cursor-pointer md:flex">
                    <Link to="/">Home</Link>
                    <Link to="analytics">Analytics</Link>
                    <Link to="settings">Settings</Link>
                </div>
                <div className="flex pt-4 absolute right-4">
                    <Logout />
                </div>
            </header>
        </>
    );
}
