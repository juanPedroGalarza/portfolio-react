import { AppBar, styled } from "@mui/material";

const AppBarStyled = styled(AppBar)(({ theme, istop }) => ({
  justifyContent: "space-around",
  flexFlow: "row wrap-reverse",
  alignItems: "center",
  position: "sticky",
  top: 0,
  minHeight: "15vh",
  boxShadow: istop && "none",
  transition: "all 20ms",
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