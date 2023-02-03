import { Button, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { Proyect } from "../../features/proyects/proyectsData";
import SplitButtonHref from "../buttons/SplitButtonHref";
import { OneBar } from "../StyledComponents/BackgroundBars";
import ProyectCardStyled from "../StyledComponents/proyects/ProyectCardStyled";
import ProyectImageCard from "./ProyectImageCard";

interface MyProps {
  data: Proyect
}

export default function ProyectCard({data}:MyProps) {
  const { 
    picture,
    name, 
    description,
    repositories,
    urls
  }: Proyect = data

  const [showMoreInfo, setShowMoreInfo] = React.useState<boolean>(false)
  const toggleMoreInfo = ():void => setShowMoreInfo((v:boolean):boolean => !v)

  return (
    <ProyectCardStyled
      raised
    >
      <CardActionArea
        onClick={toggleMoreInfo}
        className={showMoreInfo ? "rotate" : ""}
      >
        {showMoreInfo ?
          <CardContent>
            <Typography>{description}</Typography>
          </CardContent>
          : 
          <ProyectImageCard image={picture} title={name} />
        }
        <OneBar bcgcolor="primary" height="3" className="card-bar" />
        <OneBar bcgcolor="info" height="2" second="true" className="card-bar" />
      </CardActionArea>
      <CardActions disableSpacing >
        <Button
          color="info"
          variant="contained"
          size="small"
          onClick={toggleMoreInfo}
        >{showMoreInfo?"Hide":"More"} Info
        </Button>
        <SplitButtonHref options={repositories}>Repostitories</SplitButtonHref>
        <SplitButtonHref options={urls}>Sites</SplitButtonHref>
      </CardActions>
    </ProyectCardStyled>
  )
}