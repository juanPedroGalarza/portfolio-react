import { Box, styled } from "@mui/material";

const LoadingStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  "& span": {
    margin: 0,
    gap: 5
  },
  "& span span": {
    backgroundColor: theme.palette.primary.main
  }
}))
export default LoadingStyled