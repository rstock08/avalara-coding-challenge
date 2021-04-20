import { createMuiTheme } from "@material-ui/core";

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