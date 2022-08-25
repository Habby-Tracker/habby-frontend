import { Navigate } from 'react-router-dom';
import { useUser } from '../../../State/Hooks/user';
import Auth from './Auth';


export default function UserAuth() {
    const { user, checkedForUser } = useUser();

    return (
        checkedForUser 
            ? user ? <Navigate to={'/'} /> : <Auth /> 
            // should be a loading page below while app checks for user after refresh
            : <></>
    );
}
