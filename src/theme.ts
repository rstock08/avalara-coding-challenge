import {
    unstable_createMuiStrictModeTheme as createMuiTheme
} from '@material-ui/core/styles';

const primaryColor = "#f44336"
const secondaryColor = "#00acc1"

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        }
    }
})