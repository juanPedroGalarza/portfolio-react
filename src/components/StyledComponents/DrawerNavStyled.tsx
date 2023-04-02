import { Drawer, styled } from "@mui/material";

const DrawerNavStyled = styled(Drawer)(({ theme }) => ({
  "@media (min-width: 769px)": {
    display: "none",
  },
  "& .MuiDrawer-paper": {
    gap: ".5rem",
    alignItems: "center",
    "& .MuiTypography-root": {
      padding: "1rem 2rem",
      color: theme.palette.warning.main,
    },
  },
}));

export default DrawerNavStyled;
