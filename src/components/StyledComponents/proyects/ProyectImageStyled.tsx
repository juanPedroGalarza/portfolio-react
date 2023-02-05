import { alpha, Box, styled } from "@mui/material";

const ProyectImageStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  "& .MuiTypography-root": {
    position: "absolute",
    display: "inline",
    margin: "0 auto",
    border: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    backgroundColor: `${alpha(theme.palette.grey[600], 0.67)}`,
    padding: ".5rem"
  },
  "& .MuiCardMedia-img": {
    maxHeight: "100%"
  }
}));

export default ProyectImageStyled;