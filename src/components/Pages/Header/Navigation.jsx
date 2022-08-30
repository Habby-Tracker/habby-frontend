import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';;

export default function Navigation({ navigation }) {

    const icon = (label) => {
        switch(label) {
            case 'home': 
                return <HomeIcon sx={{ color: 'purple', fontSize: '38px' }}/>;
            case 'analytics':
                return <InsightsIcon sx={{ color: 'purple', fontSize: '38px' }}/>;
            case 'settings':
                return <SettingsIcon sx={{ color: 'purple', fontSize: '38px' }}/>;
        }
    };
    return (
        <nav className="fixed bottom-0 py-1 mx-auto min-w-full 
        bg-gradient-to-br from-lightOrange to-primaryOrange rounded-t-lg h-12 md:hidden">
            {navigation.map(({ to, label }) => (
                <Link key={to} to={to} className="mx-10">
                    {icon(label) ? icon(label) : label}
                </Link>
            ))}
        </nav>
    );
}

