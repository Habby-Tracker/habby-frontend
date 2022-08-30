import { LogoutOutlined } from '@mui/icons-material';
import { useAuthActions } from '../../../State/Hooks/user';

export default function Logout() {
    const { signOut } = useAuthActions();

    return (
        <div>
            <a onClick={signOut} className="hover:cursor-pointer">
                <LogoutOutlined color="secondary" sx={{ fontSize: '28px' }} />
            </a>
        </div>
    );
}
