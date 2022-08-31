import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { createTheme } from '@mui/system';

function CircularProgressWithLabel(props) {
    
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} style={{ color: props.ringcolor }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant={props.textvariant} component="div" style={{ color: props.textcolor }}>
                    {`${Math.round(props.value > 10 ? props.value : 0)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
    value: PropTypes.number.isRequired,
};


export default function PieChart({ progress, size, ringcolor, textcolor, textvariant }) {
    const success = 'hsla(144, 82%, 47%, 1)';

    return (
        <div>
            <CircularProgressWithLabel 
                value={progress} 
                size={size} 
                ringcolor={progress >= 100 ? success : ringcolor} 
                textcolor={progress >= 100 ? success : textcolor} 
                textvariant={textvariant}
            />
        </div>
    );
}
