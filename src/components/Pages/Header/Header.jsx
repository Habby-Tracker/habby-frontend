import Menu from './Menu';
import Navigation from './Navigation';
import User from './User';

const nav = [
    { to: '/', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'progress', label: 'Progress' },
    { to: 'GoalAdded', label: 'GoalAdded' },
];

export default function Header() {
    return (
        <header>
            <div>
                <Menu />
            </div>

            <h1>My React App</h1>

            <div>
                <Navigation navigation={nav} />
            </div>

            <User username={'Will'}/>
        </header>
    );
}
