import { styled, Container } from "@mui/material";

const MainStyled = styled(Container)(({ theme }) => ({
  minHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
}))
export default function Main(props) {
  return (
    <MainStyled
    maxWidth="xl"
      {...props}
    >
      {props.children}
    </MainStyled>
  )
} 
