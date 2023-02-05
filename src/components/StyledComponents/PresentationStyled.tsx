import { styled, Grid } from "@mui/material";

const PresentationStyled = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  minHeight: "85vh",
  "& .MuiGrid-item": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  "& > .title-presentation": {
    justifyContent: "flex-end"
  },
  "& > .subtitle-presentation": {
    alignItems: "flex-end"
  },
  "& .MuiTypography-h1": {
    fontFamily: "'Teko'",
    color: theme.palette.warning.main
  },
  "& 	.MuiTypography-h3": {
    fontFamily: "'Work Sans'"
  },
  "& .MuiTypography-subtitle1": {
    fontFamily: "'Roboto'"
  },
  "& .MuiBox-root": {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap"
  }
}));

export default PresentationStyled;