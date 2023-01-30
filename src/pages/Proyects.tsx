import { Suspense } from "react"
import { lazy } from "react"
import Loading from "../components/Loading"
import MainStyled from "../components/StyledComponents/MainStyled"
import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import React from "react"
import { StoreInterface } from "../features/store"
import { Proyect } from "../features/proyects/proyectsData"

const ProyectCard = lazy(() => import("../components/proyects/ProyectCard"))


export default function Proyects() {
    const {proyects} = useSelector((state:StoreInterface)=>state.proyectsData)

    function printCards(item:Proyect,index:number) {
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
                    {proyects.map(printCards)}
            </Suspense>
            </Grid>
        </MainStyled>
    )
}