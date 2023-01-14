import { AppBar, styled } from "@mui/material";

const AppBarStyled = styled(AppBar)(({ theme, istop }) => ({
  minHeight: "15vh",
  display: "flex",
  justifyContent: "space-around",
  flexFlow: "row wrap",
  alignItems: "center",
  position: "sticky",
  top: 0,
  transition: "all 20ms",
  boxShadow: istop && "none",
  "& .menu-button": {
    display: "none"
  },
  "& .tool-bar": {
    gap: "0.2rem"
  },
  "@media (max-width: 768px)": {
    "& .tool-bar": {
      display: "none"
    },
    "& .menu-button": {
      display: "block"
    }
  },
}))
export default AppBarStyled