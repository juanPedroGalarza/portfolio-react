import { Box, BoxProps, styled } from "@mui/material";
import React from "react";
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

export default function MainLayoutBody(props: BoxProps) {
  return (
    <BoxBody>
      <BackgroundBars
        bcgcolor="error"
        secondcolor="info"
        className="bcg-bar"
      />
    {props.children}
  </BoxBody>)
}