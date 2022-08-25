import { useUser } from '../../../State/Hooks/user';
import Auth from './Auth';

export default function UserAuth() {
    const { user } = useUser();

    console.log('auth user', user);

    return (
        <>
            <Auth />
        </>
    );
}
