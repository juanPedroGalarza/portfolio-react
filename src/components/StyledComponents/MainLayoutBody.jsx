import { Box, styled } from "@mui/material";
import BackgroundBars from "./BackgroundBars";

const BoxBody = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  minHeight: "100vh",
  width: "100%",
  "& .bcg-bar": {
    position: "fixed"
  },
  "&:before": {
    content: '""',
    position: "fixed",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    zIndex: -1,
  },
}))

export default function MainLayoutBody(props) {
  return (
    <BoxBody>
      <BackgroundBars
        color="error"
        secondcolor="info"
        className="bcg-bar"
      />
    {props.children}
  </BoxBody>)
}