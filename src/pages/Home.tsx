import React from "react"
import { lazy, Suspense } from "react"
import About from "../components/About"
import Loading from "../components/Loading"
import Presentation from "../components/Presentation"
import MainStyled from "../components/StyledComponents/MainStyled"
import Technologies from "../components/Technologies"

const Contact = lazy(()=>import("../components/Contact"))

export default function Home() {
    return (
        <MainStyled>
            <Suspense fallback={<Loading />}>
                <Presentation />
                <About />
                <Technologies />
                <Contact />
            </Suspense>
        </MainStyled>
    )
}