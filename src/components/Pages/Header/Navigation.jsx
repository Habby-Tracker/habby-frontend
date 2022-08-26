import { Link } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

export default function Navigation({ navigation }) {

    const icon = (label) => {
        switch(label) {
            case 'home': 
                return <HomeTwoToneIcon color="purple" />;
            case 'analytics':
                return <ShowChartTwoToneIcon />;
            case 'settings':
                return <SettingsTwoToneIcon color="gray"/>;
        }
    }
    return (
        <nav className="container justify-between space-x-12 mx-auto
        bg-gradient-to-r from-gray-300 to-primaryOrange">
            {navigation.map(({ to, label }) => (
                <Link key={to} to={to}>
                    {icon(label)}
                </Link>
            ))}
        </nav>
    );
}

