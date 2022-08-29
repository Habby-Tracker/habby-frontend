import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/system';


export default function ProgressBar({ progress, textColor }) {

    const theme = createTheme({
        status: {
            success: 'hsla(144, 82%, 47%, 1)',
            pending: 'hsla(100, 0%, 98%, 0.75)',
            failed: 'hsla(330, 28%, 13%, 1)'
        },
        palette: {
            primary: {
                main: 'hsla(21.6, 100%, 50%, 1)',
                darker: 'hsla(21.6, 100%, 20%, 1)'
            },
            secondary: {
                main: 'hsla(315, 97%, 42%, 0.81)',  
            },
            success: {
                main: 'hsla(144, 82%, 47%, 1)'
            },
            neutral: {
                main: 'hsla(100, 0%, 98%, 0.75)',
                contrastText: 'hsla(330, 28%, 13%, 1)'
            }
        },
        variant: {
            determinate: 'determinate'
        }
    });

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                <Box sx={{ width: '85%', mr: 1 }}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" value={progress} color={'secondary'} sx={{ height: '10px', borderRadius: '10px' }} />
                    </ThemeProvider>
                    
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



