import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function ProgressBar({ progress, textColor }) {

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                <Box sx={{ width: '85%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={progress} color={'primary'} sx={{ height: '10px', borderRadius: '10px' }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" style={{ color: textColor }}>
                        {`${Math.round(progress)}%`}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}



