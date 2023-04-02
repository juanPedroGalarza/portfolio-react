import { alpha, Box, styled } from "@mui/material";

const ProyectImageStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: `${alpha(theme.palette.grey[600], 0.87)}`,
  "& .MuiCardMedia-img": {
    maxHeight: "100%",
    transitionDuration: theme.transitions.duration.short + "ms",
    "&:hover": {
      filter: "brightness(.8)",
    },
  },
}));

export default ProyectImageStyled;
