import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { createTheme } from '@mui/system';

function CircularProgressWithLabel(props) {


    // const theme = createTheme({
    //     status: {
    //         success: 'hsla(144, 82%, 47%, 1)',
    //         pending: 'hsla(100, 0%, 98%, 0.75)',
    //         failed: 'hsla(330, 28%, 13%, 1)'
    //     },
    //     palette: {
    //         primary: {
    //             main: 'hsla(21.6, 100%, 50%, 1)',
    //             darker: 'hsla(21.6, 100%, 20%, 1)'
    //         },
    //         secondary: {
    //             main: 'hsla(315, 97%, 26%, 1)',
    //             lighter: 'hsla(315, 97%, 42%, 0.81)'
    //         },
    //         neutral: {
    //             main: 'hsla(100, 0%, 98%, 0.75)',
    //             contrastText: 'hsla(330, 28%, 13%, 1)'
    //         }
    //     },
    //     variant: {
    //         determinate: 'determinate',
    //         h4: 'h4',
    //         caption: 'caption'
    //     }
    // });
    
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
                <Typography variant={'h4'} component="div" style={{ color: props.textcolor }}>
                    {`${Math.round(props.value)}%`}
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
                textVariant={textvariant}
            />
        </div>
    );
}
