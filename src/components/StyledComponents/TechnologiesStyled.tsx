import { Grid, styled, alpha } from "@mui/material";

interface moreProps {
  themename?: string
};

const TechnologiesStyled = styled(Grid)<moreProps>(({ theme, themename }) => ({
  width: "90%",
  justifyContent: "space-between",
  justifyItems: "center",
  maxWidth: 1050,
  "& > .MuiTypography-h4": {
    width: "100%",
    paddingBottom: ".5rem",
  },
  "& > .MuiGrid-item > .MuiBox-root": {
    backgroundColor: alpha(theme.palette.background.paper, .37),
    boxShadow: `1px 1px 8px ${alpha(theme.palette.background.paper, .37)}`,
    borderRadius: 3,
    padding: "2rem",
    "& > .MuiGrid-container": {
      justifyContent: "center",
      alignItems: "center",
      " > .MuiGrid-item": {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        "& > .MuiBox-root": {
          width: 100,
          height: 150,
          backgorundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          transition: "all 500ms ease",
          padding: ".2rem",
          "& > .image-tech": {
            width: "100%",
            objectFit: "contain",
            filter: themename === "dark" ? "invert(100%)" : null,
            transition: "all 500ms ease",
          },
          "& > .MuiTypography-h5": {
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.text.primary,
            fontFamily: "'Teko'",
          },
          "&:hover": {
            backgroundColor: alpha(theme.palette.text.secondary, .17),
            borderRadius: 4,
            "& .image-tech": {
              transform: `scale(.85)`,
            },
          }
        },
      },
    }
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

export default TechnologiesStyled;