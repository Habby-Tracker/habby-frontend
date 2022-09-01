import { Link } from 'react-router-dom';
import { useUser } from '../../../State/Hooks/user';
import Logout from './Logout';
import { useTour } from '@reactour/tour';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Header() {
    const { user } = useUser();
    const { setIsOpen } = useTour();


    return (
        <>
            <header className="flex justify-left space-x-0 md:space-x-6 px-4 py-2 bg-gradient-to-br from-primaryOrange to-lightOrange">
                <div data-tour="step-7">
                    <img src="/imgs/habbylogo.png" alt="Habby Logo" className="h-12" />   
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
            <div className="flex justify-between space-around w-full items-end">
                <div className="flex space-x-0 px-2 py-2 text-xl justify-start md:hidden">
                    {'Welcome,'}
                    <span className="text-purple pl-1">
                        {user ? `${user.firstName}`  : 'user'}
                    </span>
                </div>
                <button className="flex space-x-0 px-2 py-2 text-xl justify-start" data-tour="step-1" onClick={() => setIsOpen(true)} >
                    <HelpOutlineIcon />
                </button>
            </div>
        </>
    );
}
