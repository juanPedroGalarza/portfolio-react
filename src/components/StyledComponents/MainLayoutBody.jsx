import { Box, styled } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const BoxBody = styled(Box)(({ theme }) => ({
  color: blueGrey[100],
  backgroundColor: theme.palette.background.default,
  backgroundImage: "url('img/pattern03.png')",
  backgroundPosition: "50%",
  backgroundRepeat: "repeat",
  minHeight: "100vh"
}))

export default function MainLayoutBody(props) {
  return <BoxBody>{props.children}</BoxBody>
}