import { Suspense } from "react"
import { lazy } from "react"
import "../styles/Proyects.css"

const BorderB = lazy(() => import("../components/borders/BorderB"))
import border from "../assets/img/border02.png"
import myTineraries from "../assets/img/MyTineraries.png"
import Loading from "../components/Loading"
export default function Proyects() {
    const list = [1, 2, 3, 4, 5, 6]
    function printItem(item) {
        return (
            <Suspense fallback={<Loading />} key={item}>
                <BorderB border={border}>
                    <img src={myTineraries} className="proyect-img"/>
                </BorderB>
            </Suspense>
        )
    }
    return (
        <main className="main">
            <h1>My Proyects</h1>
            <div className="listProyects">
                {list.map(printItem)}
            </div>
        </main>
    )
}