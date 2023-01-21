import { Card, styled } from "@mui/material";

const ProyectCardStyled = styled(Card)(({ theme }) => ({
  position: "relative",
    minHeight: 360,
  "& .MuiCardActionArea-root": {
    height: 250,
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
    minHeight: 110,
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: 7
  },
  "& .MuiCardContent-root": {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    transform: "rotateY(180deg)"
  },
  "@media (max-width: 1440px)": {
    minHeight: 320,
    "& .MuiCardActionArea-root": {
      height: 230,
    },
    "& .MuiCardActions-root": {
      minHeight: 90
    },
  },
  "@media (max-width: 768px)": {
    minHeight: 200,
    "& .MuiCardActionArea-root": {
      height: 140,
    },
    "& .MuiCardActions-root": {
      minHeight: 60
    }
  }
}))

export default ProyectCardStyled