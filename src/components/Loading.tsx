import { BoxProps } from "@mui/material";
import * as React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import LoadingStyled from "./StyledComponents/LoadingStyled";


export default function Loading(props:BoxProps):JSX.Element {
  return (
    <LoadingStyled {...props}>
      <PulseLoader
        color="none"
        size="5rem"
      />
    </LoadingStyled>
  );
};