// import { useContext } from 'react';
// import { UserStateContext } from '../../../State/Context/UserContext';
// import Menu from './Menu';
// import Navigation from './Navigation';
// import User from './User';

import Menu from './Menu';

// const nav = [
//     { to: '/', label: 'Home' },
//     { to: 'about', label: 'About' },
//     { to: 'progress', label: 'Progress' },
// ];

export default function Header() {
    // const user = useContext(UserStateContext);
    const user = {
        firstName: 'Riley',
        lastName: 'Hoffman',
        email: 'rileyjhoff@gmail.com',
        avatar: ''
    };

    return (
        <header className="flex flex-row justify-between align-center bg-white">
            <div className="px-4 py-1 text-lg">
                {'Hello, '}
                <span className="text-primaryOrange">
                    {user.firstName}!
                </span>
            </div>
            <Menu className="px-4 py-1" />
        </header>
    );
}
