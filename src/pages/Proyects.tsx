import Loading from "../components/Loading";
import MainStyled from "../components/StyledComponents/MainStyled";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import { StoreInterface } from "../features/store";
import { Proyect } from "../features/proyects/proyectsData";
import { ProyectsState } from "../features/proyects/proyectsSlice";

const ProyectCard = React.lazy(() => import("../components/proyects/ProyectCard"));


export default function Proyects():JSX.Element {
    const { proyects }: ProyectsState
        = useSelector((state: StoreInterface): ProyectsState => state.proyectsData);

    function printCards(item:Proyect,index:number) {
        return (
            <Grid item xs={12} sm={6} md={5} lg={4} key={index}>
                <ProyectCard data={item} />
            </Grid>
        );
    };
    return (
        <MainStyled
            sx={{gap:1}}
        >
            <Typography variant="h2" sx={{fontFamily:"'Work Sans'"}}>My Proyects</Typography>
            <Grid container spacing={5} sx={{justifyContent: "center"}}>
                <React.Suspense fallback={<Loading />} >
                    {proyects.map(printCards)}
                </React.Suspense>
            </Grid>
        </MainStyled>
    );
};