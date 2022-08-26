import { Logout } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Navigation from './Navigation.jsx';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        if (e.target.className === 'something') {
            e.stopPropagation();
            setIsOpen((isOpen) => !isOpen);
        }
    };

    const nav = [
        { to: '/', label: 'Home' },
        { to: 'list', label: 'List' },
        { to: 'nba', label: 'NBA' },
        { to: 'about', label: 'About' },
        { to: 'form', label: 'Form' },
    ];

    useEffect(() => {
        if (!isOpen) return;
    
        const closeMenu = (e) => {
            if (e.target.className !== 'menu-container') {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', closeMenu);
    
        const keyHandler = (e) => {
            if (e.key !== 'Escape') return;
            setIsOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
    
        const resizeHandler = (e) => {
            if (e.target.innerWidth >= 750) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', resizeHandler);
        
        return () => {
            document.removeEventListener('click', closeMenu);
            document.removeEventListener('keydown', keyHandler);
            window.removeEventListener('resize', resizeHandler);
        };
    }, [isOpen]);
    
    return (
        <button className="" onClick={handleClick}>
            <div className="">
                <Navigation navigation={nav}/>
                <Logout />
            </div>
        </button>
    );
}

