import { Box, BoxProps, styled } from "@mui/material";
import React from "react";

type ValidColors = "primary" | "secondary" | "error" | "warning" | "info" |"success"

interface MyProps {
  bcgcolor: ValidColors,
  second?: boolean,
  secondcolor?:ValidColors
}

export const OneBar = styled(Box)<MyProps>(({ theme, bcgcolor, height, second }) => ({
  position: "absolute",
  top: 0,
  right: second?"-40%":"-30%",
  transform: "rotate(45deg)",
  width: "100%",
  height: height? `${height}rem`:"6rem",
  opacity: "87%",
  backgroundColor:theme.palette[bcgcolor].dark,
  "@media (max-width: 1440px)": {
    height: height?`${Number(height) / 2}rem`:"3rem"
  },
  "@media (max-width: 768px)": {
    height: height?`${Number(height) / 3}rem`:"1.5rem"
  }
}))

export default function BackgroundBars(props:BoxProps & MyProps) {
  return (
    <React.Fragment>
      <OneBar {...props} />
      <OneBar {...props} second={true} bcgcolor={props.secondcolor} />
    </React.Fragment>
  )
}