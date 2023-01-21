import { lazy, Suspense } from "react"
import Loading from "../components/Loading"
import MainStyled from "../components/StyledComponents/MainStyled"

const Contact = lazy(()=>import("../components/Contact"))

export default function Home() {
    return (
        <MainStyled>
            <Suspense fallback={<Loading />}>
                <Contact />
            </Suspense>
        </MainStyled>
    )
}