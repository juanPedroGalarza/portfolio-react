import { Card, styled } from "@mui/material";

const ProyectCardStyled = styled(Card)(({ theme }) => ({
  position: "relative",
  minHeight: 360,
  overflow: "visible",
  "& .MuiCardHeader-root": {
    position: "relative",
    "& .MuiCardHeader-title": {
      position: "relative",
      display: "inline",
      fontFamily: "'Teko'",
      "&::after": {
        content: "''",
        height: 3,
        width: 0,
        backgroundColor: theme.palette.warning.main,
        position: 'absolute',
        bottom: -3,
        left: '50%',
        transitionTimingFunction: theme.transitions.easing.easeOut,
        transitionDuration: theme.transitions.duration.complex + "ms"
      },
    },
  },
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
  "&:hover .MuiCardHeader-title": {
    "&::after": {
      width: "100%",
      height: 3,
      left: 0
    },
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
    minHeight: 250,
    "& .MuiCardActionArea-root": {
      height: 160,
    },
    "& .MuiCardActions-root": {
      minHeight: 60
    }
  }
}));

export default ProyectCardStyled;