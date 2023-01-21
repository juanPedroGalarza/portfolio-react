import { Suspense } from "react"
import { lazy } from "react"
import "../styles/Proyects.css"
import myTineraries from "../assets/img/MyTineraries.png"
import Loading from "../components/Loading"
import MainStyled from "../components/StyledComponents/MainStyled"
import { Grid } from "@mui/material"

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
    function printCards(item,index) {
        return (
            <Grid item xs={12} sm={6} md={5} lg={4} key={index}>
                <ProyectCard data={item} />
            </Grid>
        )
    }
    return (
        <MainStyled>
            <h1>My Proyects</h1>
            <Grid container spacing={5}>
            <Suspense fallback={<Loading />} >
                    {list.map(printCards)}
            </Suspense>
            </Grid>
        </MainStyled>
    )
}