import { AppBar, styled, alpha } from "@mui/material";

interface MyProps {
  istop: { v: boolean };
}

const AppBarStyled = styled(AppBar)<MyProps>(({ theme, istop }) => ({
  position: "sticky",
  top: 0,
  minHeight: "15vh",
  boxShadow: istop.v && "none",
  transition: "all .5s ease",
  justifyContnt: "center",
  alignItems: "flex-start",
  "& .menu-button": {
    display: "none",
    paddingLeft: "1.5rem",
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
        justifySelf: "flex-start",
      },
    },
    "& > .MuiTypography-root": {
      flexGrow: 1,
      fontFamily: "'Work Sans'",
      color: alpha(theme.palette.warning.main, 0.87),
    },
  },
  "@media (max-width: 768px)": {
    minHeight: 0,
    "& .MuiToolbar-root": {
      display: "none",
    },
    "& .menu-button": {
      display: "inline",
    },
    "& > .MuiContainer-root": {
      minHeight: "5vh",
      display: istop.v ? "none" : "flex",
      "& > .MuiTypography-root": {
        paddingBottom: "1rem",
      },
    },
  },
}));
export default AppBarStyled;
