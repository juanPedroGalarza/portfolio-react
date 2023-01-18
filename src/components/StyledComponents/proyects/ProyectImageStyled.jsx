import { alpha, Box, styled } from "@mui/material";

const ProyectImageStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiTypography-root": {
    position: "absolute",
    display:"inline",
    margin: "0 auto",
    border: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    backgroundColor: `${alpha(theme.palette.grey[600], 0.67)}`,
    padding: ".5rem"
  }
}))

export default ProyectImageStyled