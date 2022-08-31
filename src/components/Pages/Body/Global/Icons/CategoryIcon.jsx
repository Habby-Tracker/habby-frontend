import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';
import MosqueIcon from '@mui/icons-material/Mosque';

export default function CategoryIcon({ id }) {
    switch (id) {
        case '1':
            return <LocalHospitalIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }}/>;
        case '2':
            return <DirectionsRunIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }} />;
        case '3':
            return <RestaurantIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }} />;
        case '4':
            return <PsychologyIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }} />;
        case '5':
            return <GroupsIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }} />;
        case '6':
            return <WorkIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }} />;
        case '7':
            return <AttachMoneyIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }} />;
        case '8':
            return <SchoolIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }} />;
        case '9':
            return <MosqueIcon sx={{ color: 'hsla(315, 97%, 26%, 1)', fontSize: 50, paddingLeft: '12px' }} />;
        default:
            return <img src="/imgs/habbylogo.png" alt="Habby Logo" className="w-12"/>;
    }
}
