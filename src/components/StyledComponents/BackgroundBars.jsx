import { Box, styled } from "@mui/material";

export const OneBar = styled(Box)(({ theme, color, height, second }) => ({
  position: "absolute",
  top: 0,
  right: second?"-40%":"-30%",
  transform: "rotate(45deg)",
  width: "100%",
  height: height? `${height}rem`:"6rem",
  opacity: "87%",
  backgroundColor:theme.palette[color]?.dark,
  "@media (max-width: 1440px)": {
    height: height?`${height / 2}rem`:"3rem"
  },
  "@media (max-width: 768px)": {
    height: height?`${height / 3}rem`:"1.5rem"
  }
}))

export default function BackgroundBars(props) {
  return (
    <>
      <OneBar {...props} />
      <OneBar {...props} second="true" color={props.secondcolor} />
    </>
  )
}