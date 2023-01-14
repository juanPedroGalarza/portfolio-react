import { Drawer, styled } from "@mui/material";

const DrawerNavStyled = styled(Drawer)(({ theme }) => ({
  "@media (min-width: 769px)": {
    display: "none"
  },
  "& .MuiDrawer-paper": {
    gap: ".5rem",
    padding: "2rem",
  }
}))

export default DrawerNavStyled