// import Menu from './Menu';
// import Navigation from './Navigation';
// import User from './User';

// const nav = [
//     { to: '/', label: 'Home' },
//     { to: 'analytics', label: 'Analytics'  },
//     { to: 'Settings', label: 'settings' },
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
        <header className="flex justify-around space-x-6 sm:space-x-0">
            img.
            <h1 className="flex text-bold text-primaryOrange">Habby</h1>

            <div className="flex justify-between space-x-0 md:space-x-6">
                {'Hello, '}
                <span className="text-primaryOrange">
                    {user.firstName}!
                </span>
            </div>
        </header>
    );
}
