import { Card, styled } from "@mui/material";

const ProyectCardStyled = styled(Card)(({ theme }) => ({
  position: "relative",
  width: 600,
  minHeight: 400,
  "& .MuiCardActionArea-root": {
    height: 280,
    overflow: "hidden",
    transition: "transform 1000ms"
  },
  "& .MuiCardActionArea-root.rotate": {
    transform: "rotateY(180deg)"
  },
  "& .rotate .card-bar": {
    transform: "rotate(0)",
    right: 0,
    top: "100%",
  },
  "& .MuiCardActions-root": {
    minHeight: 120,
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: 7
  },
  "& .MuiCardContent-root": {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    transform: "rotateY(180deg)",
    paddingTop: "3rem"
  },
  "@media (max-width: 1440px)": {
    width: 400,
    minHeight: 320,
    "& .MuiCardActionArea-root": {
      height: 230,
    },
    "& .MuiCardActions-root": {
      minHeight: 90
    },
    "& .MuiCardContent-root": {
      paddingTop: "1.5rem"
    }
  },
  "@media (max-width: 768px)": {
    width: 320,
    minHeight: 200,
    "& .MuiCardActionArea-root": {
      height: 140,
    },
    "& .MuiCardActions-root": {
      minHeight: 60
    },
    "& .MuiCardContent-root": {
      paddingTop: "1rem"
    }
  }
}))

export default ProyectCardStyled