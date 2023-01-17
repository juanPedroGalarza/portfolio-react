import { teal, blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[800],
      dark: "#004940",
      light: "#33877c"
    },
    background: {
      paper: blueGrey[50]
    }
  }
})
export default theme