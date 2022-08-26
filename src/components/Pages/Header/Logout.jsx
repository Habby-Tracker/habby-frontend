import { useAuthActions } from '../../../State/Hooks/user';

export default function Logout() {
    const { signOut } = useAuthActions();

    return (
        <div>
            <a onClick={signOut}>
                Sign Out
            </a>
        </div>
    );
}
