import { AppBar, styled } from "@mui/material";

interface MyProps {
  istop: {v:boolean}
}

const AppBarStyled = styled(AppBar)<MyProps>(({ theme, istop }) => ({
  position: "sticky",
  top: 0,
  minHeight: "15vh",
  boxShadow: istop.v&& "none",
  transition: "all .5s ease",
  "& .menu-button": {
    display: "none"
  },
  "& > .MuiContainer-root": {
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "row wrap",
    alignItems: "center",
    minHeight: "15vh",
    "& > .MuiToolbar-root": {
      gap: "0.2rem",
      alignItems: "center",
      "& > .MuiButtonGroup-root": {
        justifySelf: "flex-start"
      },
    },
    "& > .MuiTypography-root": {
      flexGrow: 1,
      fontFamily: "'Work Sans'",
      color: theme.palette.background.paper,
      textShadow: `-1px 1px 2px ${theme.palette.text.primary}`,
    },
  },
  "@media (max-width: 768px)": {
    "& .MuiToolbar-root": {
      display: "none"
    },
    "& .menu-button": {
      display: "block"
    },
    "& > .MuiContainer-root": {
      minHeight: "10vh"
    }
  },
}))
export default AppBarStyled