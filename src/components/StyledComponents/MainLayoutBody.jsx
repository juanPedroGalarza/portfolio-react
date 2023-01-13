import { Box, styled } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const BoxBody = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  minHeight: "100vh",
  "&:before": {
    content: '""',
    position: "fixed",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    backgroundImage: "url('img/pattern03.png')",
    backgroundRepeat: "repeat",
    zIndex: -1
  },
}))

export default function MainLayoutBody(props) {
  return <BoxBody>{props.children}</BoxBody>
}