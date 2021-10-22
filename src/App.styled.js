import { createTheme, ThemeProvider as GenericThemeProvider } from '@mui/material/styles';
// import { blue, blueGrey, green, grey, red, teal } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(24, 140, 24)",
        },
        secondary: {
            main: "rgb(255,255,255)",
        },
        success: {
            main: "rgb(192,192,192)",
            contrastText: '#FFFFFF'
        },
    },
});

export const ThemeProvider = (props) => <GenericThemeProvider theme={theme} {...props} />