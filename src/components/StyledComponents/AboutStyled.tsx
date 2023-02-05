import { alpha, Box, styled } from "@mui/material";

const AboutStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: ".1rem",
  flexDirection: "column",
  width: "100%",
  maxWidth: 1050,
  padding: "1.4rem",
  boxShadow: `1px 1px 10px ${theme.palette.action.hover}`,
  backgroundColor: theme.palette.action.hover,
  transition: "all .7s",
  ":hover": {
    boxShadow: `1px 1px 10px ${theme.palette.action.selected}`,
    backgroundColor: theme.palette.action.selected
  },
  "& .about-col": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  "@media (max-width: 1440px)": {
    maxWidth: 850
  },
  "@media (max-width: 1024px)": {
    maxWidth: 700
  },
  "@media (max-width: 768px)": {
    maxWidth: 600
  },
}));

export default AboutStyled;