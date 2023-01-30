import React from "react"
import { lazy, Suspense } from "react"
import About from "../components/About"
import Loading from "../components/Loading"
import MainStyled from "../components/StyledComponents/MainStyled"

const Contact = lazy(()=>import("../components/Contact"))

export default function Home() {
    return (
        <MainStyled>
            <Suspense fallback={<Loading />}>
                <About />
                <Contact />
            </Suspense>
        </MainStyled>
    )
}