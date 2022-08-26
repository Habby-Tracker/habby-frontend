import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.primary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
    value: PropTypes.number.isRequired,
};

export function LinearWithValueLabel() {
    const [progress, setProgress] = useState(10);
  
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
  
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}

export default function ProgressBar({ progress }) {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100px', mr: 1 }}>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.primary">
                        {`${Math.round(progress)}%`}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}



