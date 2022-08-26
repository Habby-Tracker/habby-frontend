import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function ProgressBar({ progress }) {

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                <Box sx={{ width: '85%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={progress} color="secondary" sx={{ height: '10px', borderRadius: '10px' }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" className="text-primaryOrange">
                        {`${Math.round(progress)}%`}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}



