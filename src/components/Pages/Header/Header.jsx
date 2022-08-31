
import { Link } from 'react-router-dom';
import { useUser } from '../../../State/Hooks/user';
import Logout from './Logout';

export default function Header() {
    const { user } = useUser();
    console.log('user', user);

    return (
        <>
            <header className="flex justify-left space-x-0 md:space-x-6 px-4 py-2 bg-gradient-to-br from-primaryOrange to-lightOrange">
                <img src="/imgs/habbylogo.png" alt="Habby Logo" className="h-12"/>
                
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
            <div className="flex space-x-0 px-2 py-2 text-xl justify-start md:hidden">
                {'Welcome,' + '   '}
                <span className="text-darkPurple">
                    {user ? `  ${user.email}`  : 'user'}
                </span>
            </div>
        </>
    );
}
