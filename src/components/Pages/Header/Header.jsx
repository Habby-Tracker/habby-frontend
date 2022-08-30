
import { useUser } from '../../../State/Hooks/user';
import Logout from './Logout';

export default function Header() {
    const { user } = useUser();
    console.log('user', user);

    return (
        <>
            <header className="flex justify-left space-x-0 md:space-x-6 px-4 py-2 bg-gradient-to-br from-primaryOrange to-lightOrange">
                <img src="/imgs/habbylogo.png" alt="Habby Logo" className="h-12"/>
                <div className="flex space-x-0 md:space-x-6 pt-6">
                    {'Welcome, '}
                    <span className="text-darkPurple">
                        {/* {user.email}! */}
                    </span>
                </div>
                <div className="text-purple hidden pt-6 text-xl absolute space-x-4 right-20 md:flex">
                    <a >Home</a>
                    <a >Analytics</a>
                    <a >Settings</a>
                </div>
                <div className="flex pt-4 absolute right-4">
                    <Logout />
                </div>
            </header>
           
        </>
    );
}
