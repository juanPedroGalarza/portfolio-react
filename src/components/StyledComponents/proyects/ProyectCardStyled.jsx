import { Card, styled } from "@mui/material";

const ProyectCardStyled = styled(Card)(({ theme, info }) => ({
  position: "relative",
  width: 600,
  height: 400,
  "& .MuiCardActionArea-root": {
    height: 280,
    overflow: "hidden"
  },
  "& .MuiCardActions-root": {
    height: 120
  },
  "& .MuiCardContent-root": {
    width: "100%",
    height: "100%",
    overflow: "scroll-y",
  },
  "@media (max-width: 1440px)": {
    width: 400,
    height: 320,
    "& .MuiCardActionArea-root": {
      height: 230,
    },
    "& .MuiCardActions-root": {
      height: 90
    }
  },
  "@media (max-width: 768px)": {
    width: 320,
    height: 200,
    "& .MuiCardActionArea-root": {
      height: 140,
    },
    "& .MuiCardActions-root": {
      height: 60
    }
  }
}))

export default ProyectCardStyled