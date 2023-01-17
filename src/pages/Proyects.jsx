import { Suspense } from "react"
import { lazy } from "react"
import "../styles/Proyects.css"
import myTineraries from "../assets/img/MyTineraries.png"
import Loading from "../components/Loading"

const ProyectCard = lazy(() => import("../components/proyects/ProyectCard"))


export default function Proyects() {
    const list = [
        {
            proyectName: 1,
            img:myTineraries
        }, 
        {
            proyectName: 2,
            img:myTineraries
        }, 
        {
            proyectName: 3,
            img:myTineraries
        }, 
        {
            proyectName: 4,
            img:myTineraries
        }, 
        {
            proyectName: 5,
            img:myTineraries
        }, 
        {
            proyectName: 6,
            img:myTineraries
        }]
    function printItem(item) {
        return (
            <Suspense fallback={<Loading />} key={item.proyectName}>
                <ProyectCard data={item} />
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