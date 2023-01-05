import { Suspense } from "react"
import { lazy } from "react"
import "../styles/Proyects.css"

const BorderB = lazy(() => import("../components/borders/BorderB"))
import border from "../assets/img/border02.png"
import myTineraries from "../assets/img/MyTineraries.png"
import Loading from "../components/Loading"
export default function Proyects() {
    return (
        <main className="main">
            <h1>My Proyects</h1>
            <Suspense fallback={<Loading />}>
                <BorderB
                    border={border}
                >
                    <img src={myTineraries} className="proyect-img"/>
                </BorderB>
            </Suspense>
        </main>
    )
}