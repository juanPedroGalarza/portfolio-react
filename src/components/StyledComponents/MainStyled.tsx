import { styled, Container, ContainerProps } from "@mui/material";
import React from "react";

const MainStyled = styled(Container)(({ theme }) => ({
  minHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "6rem",
  paddingBottom: "6rem",
}));
export default function Main(props: ContainerProps) {
  return (
    <MainStyled maxWidth='xl' {...props}>
      {props.children}
    </MainStyled>
  );
}
