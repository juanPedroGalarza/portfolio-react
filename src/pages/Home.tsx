import React from "react"
import { lazy, Suspense } from "react"
import Loading from "../components/Loading"
import MainStyled from "../components/StyledComponents/MainStyled"

const Contact = lazy(()=>import("../components/Contact"))
const Presentation = lazy(()=>import("../components/Presentation"))
const Technologies = lazy(()=>import("../components/Technologies"))
const About = lazy(()=>import("../components/About"))

export default function Home():JSX.Element {
    return (
        <MainStyled>
            <Suspense fallback={<Loading />}>
                <Presentation />
                <About />
                <Technologies />
                <Contact />
            </Suspense>
        </MainStyled>
    );
};