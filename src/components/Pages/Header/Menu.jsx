import { useState } from 'react';
import Navigation from './Navigation.jsx';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    // const className = classNames(styles.Menu, {
    //     [styles.Open]: isOpen,
    // });

    const handleClick = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const nav = [
        { to: '/', label: 'Home' },
        { to: 'list', label: 'List' },
        { to: 'nba', label: 'NBA' },
        { to: 'about', label: 'About' },
        { to: 'form', label: 'Form' },
    ];

    return (
        <button onClick={handleClick}>
            <div>
                <Navigation navigation={nav}/>
            </div>
        </button>
    );
}

