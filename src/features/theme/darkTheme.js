import { teal, blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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