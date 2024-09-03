import { styled, Grid2 } from "@mui/material";

const PresentationStyled = styled(Grid2)(({ theme }) => ({
  justifyContent: "center",
  minHeight: "85vh",
  paddingBottom: '5em',
  "& .MuiGrid2-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "& > .title-presentation": {
    justifyContent: "flex-end",
  },
  "& > .subtitle-presentation": {
    alignItems: "flex-end",
  },
  "& .MuiTypography-h1": {
    fontFamily: "'Teko'",
    color: theme.palette.warning.main,
  },
  "& 	.MuiTypography-h3": {
    fontFamily: "'Work Sans'",
  },
  "& .MuiTypography-subtitle1": {
    fontFamily: "'Roboto'",
  },
  "& .MuiBox-root": {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export default PresentationStyled;
