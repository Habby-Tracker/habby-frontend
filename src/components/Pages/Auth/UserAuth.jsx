import { Navigate } from 'react-router-dom';
import { useUser } from '../../../State/Hooks/user';
import Auth from './Auth';

export default function UserAuth() {
    const { user } = useUser();

    console.log('user in userAuth', user);

    return user ? <Navigate to={'/'} /> : <Auth />;
}
