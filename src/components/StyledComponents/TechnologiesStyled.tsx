import { Grid, styled, alpha } from "@mui/material";

interface moreProps {
  themeName?: string
}

const TechnologiesStyled = styled(Grid)<moreProps>(({ theme, themeName }) => ({
  width: "90%",
  justifyContent: "space-between",
  justifyItems: "center",
  "& > .MuiTypography-h4": {
    width: "100%"
  },
  "& > .MuiGrid-item > .MuiBox-root": {
    backgroundColor: alpha(theme.palette.background.paper, .37),
    boxShadow: `1px 1px 8px ${alpha(theme.palette.background.paper, .37)}`,
    borderRadius: 3,
    padding: "2rem",
    "& > .MuiGrid-container > .MuiGrid-item": {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      "& > .MuiBox-root": {
        width: 100,
        height: 100,
        backgorundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        transition: "all 500ms ease",
        "& > .image-tech": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: themeName === "dark"?"invert(100%)":null
        },
        "& > .MuiTypography-h5": {
          height: "100%",
          width: "100%",
          display: "none",
          position: "absolute",
          top: 0,
          left: 0,
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.background.default,
          textShadow: `1px 1px 5px ${theme.palette.text.primary}`,
          fontFamily: "'Teko'",
        },
        "&:hover": {
          backgroundColor: alpha(theme.palette.background.paper, .37),
          padding: ".5rem",
          "& > .MuiTypography-h5": {
            display: "flex"
          },
        }
      },
    },
  },
}))

export default TechnologiesStyled