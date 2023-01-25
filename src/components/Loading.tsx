import * as React from "react"
import PulseLoader from "react-spinners/PulseLoader"
import LoadingStyled from "./StyledComponents/LoadingStyled"


export default function Loading() {
    return (
        <LoadingStyled >
            <PulseLoader
                color="none"
                size="5rem"
            />
        </LoadingStyled>
    )
}