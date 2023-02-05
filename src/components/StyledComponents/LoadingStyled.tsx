import { Box, styled } from "@mui/material";

const LoadingStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "& > span": {
    margin: 0,
    gap: 5
  },
  "& span span": {
    backgroundColor: theme.palette.warning.main
  }
}));

export default LoadingStyled;