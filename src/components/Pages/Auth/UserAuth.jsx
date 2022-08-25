import { Navigate } from 'react-router-dom';
import { useUser } from '../../../State/Hooks/user';
import Auth from './Auth';
import Profile from './Profile';

export default function UserAuth() {
    const { user, checkedForUser } = useUser();

    return (
        checkedForUser 
            ? user ? <Navigate to={'/'} /> : <Auth /> 
            // should be a loading page below while app checks for user after refresh
            : <></>
    );
}
