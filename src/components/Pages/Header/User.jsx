import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthActions, useUser } from '../../../State/Hooks/user';

// eslint-disable-next-line react/prop-types
export default function User({ username }) {
    const [, setIsOpen] = useState(false);
    // eslint-disable-next-line react/prop-types
    const [initial, setInitial] = useState(username.substring(0, 1));
    const { signOut } = useAuthActions();
    const { profile } = useUser();

    // const className = classNames(styles.User, {
    //     [styles.Open]: isOpen,
    // });

    const handleClick = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    useEffect(() => {
        setInitial(profile && profile.username.substring(0, 1));
    }, []);

    return (
        <div>
            <div onClick={handleClick}>
                {profile ? 
                    <img src={profile.avatar} alt={profile.username} />
                    : <div>{initial}</div>}
                {profile ? profile.username : username}
            </div>
            <div>
                <Link  
                    to="user/profile" 
                    onClick={handleClick}>
            Profile
                </Link>
                <Link 
                    to="user" 
                    onClick={signOut}>
            Sign Out
                </Link>
            </div>
        </div>
    );
}
