import { teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: teal[500],
      dark: "#00695f",
      light: "#33ab9f"
    }
  },
});
export default theme