import { teal, blueGrey } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: teal[500],
      dark: "#00695f",
      light: "#33ab9f"
    },
    background: {
      paper: blueGrey[800]
    }
  },
});
export default theme