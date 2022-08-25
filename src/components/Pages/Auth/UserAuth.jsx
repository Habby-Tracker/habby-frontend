import { Navigate } from 'react-router-dom';
import { useUser } from '../../../State/Hooks/user';
import Auth from './Auth';
import Profile from './Profile';

export default function UserAuth() {
    const { user, profile } = useUser();

    console.log('user in userAuth', user);

    return user ? <Navigate to={'/'} /> : <Auth />;
}
