import { Link } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

export default function Navigation({ navigation }) {

    const icon = (label) => {
        switch(label) {
            case 'home': 
                return <HomeTwoToneIcon fontSize="large"/>;
            case 'analytics':
                return <ShowChartTwoToneIcon fontSize="large" />;
            case 'settings':
                return <SettingsTwoToneIcon fontSize="large"/>;
        }
    };
    return (
        <nav className="fixed bottom-0 py-1 mx-auto min-w-full 
        bg-gradient-to-br from-orangeGrey to-gray-300 rounded h-12 md:hidden">
            {navigation.map(({ to, label }) => (
                <Link key={to} to={to} className="mx-10">
                    {icon(label)}
                </Link>
            ))}
        </nav>
    );
}

