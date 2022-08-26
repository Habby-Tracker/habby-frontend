import Menu from './Menu';
import Navigation from './Navigation';
import User from './User';

const nav = [
    { to: '/', label: 'Home' },
    { to: 'analytics', label: 'Analytics'  },
    { to: 'Settings', label: 'settings' },
];

export default function Header() {
    return (
        <header className="flex justify-around space-x-6 sm:space-x-0">
            {/* <div>
                <Menu />
            </div> */}

            <h1 className="flextext-bold text-primaryOrange">Habby</h1>
            <h6 className="text">habit tracker</h6>

            <div className="flex justify-between space-x-0 md:space-x-6">
                {/* <Navigation navigation={nav} /> */}
            </div>

            <User username={'Will'}/>
        </header>
    );
}
