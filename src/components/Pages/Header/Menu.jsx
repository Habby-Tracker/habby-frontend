import { useState } from 'react';
import Navigation from './Navigation.jsx';

export default function Menu() {
    const [, setIsOpen] = useState(false);

    // const className = classNames(styles.Menu, {
    //     [styles.Open]: isOpen,
    // });

    const handleClick = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const nav = [
        { to: '/', label: 'Home' },
        { to: 'analytics', label: 'Analytics' },
        { to: 'settings', label: 'Settings' },
    ];

    return (
        <button onClick={handleClick}>
            <div>
                <Navigation navigation={nav}/>
            </div>
        </button>
    );
}

