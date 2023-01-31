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
    color: theme.palette.primary.main,
    textShadow: `-3px 2px 2px ${theme.palette.text.secondary}`
  },
  "& 	.MuiTypography-h3": {
    color: theme.palette.secondary.main,
    textShadow: `-2px 1px ${theme.palette.text.secondary}`
  },
  "& .MuiTypography-subtitle1": {
    fontFamily: "'Work Sans'"
  }
}))

export default PresentationStyled