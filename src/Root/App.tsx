import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Typography} from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export const App = () => {
    const isDarkMode = true;
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <main>
                <Typography variant="h1">My Work Log</Typography>
            </main>
        </ThemeProvider>
    );
};
