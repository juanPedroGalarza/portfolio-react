import { Button, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import SplitButtonHref from "../buttons/SplitButtonHref";
import { OneBar } from "../StyledComponents/BackgroundBars";
import ProyectCardStyled from "../StyledComponents/proyects/ProyectCardStyled";
import ProyectImageCard from "./ProyectImageCard";

export default function ProyectCard(props) {
  const { 
    picture,
    name, 
    description,
    repositories,
    urls
  } = props.data
  

  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const toggleMoreInfo = () => setShowMoreInfo(v => !v)

  return (
    <ProyectCardStyled
      raised
    >
      <CardActionArea
        onClick={toggleMoreInfo}
        info={showMoreInfo.toString()}
        className={showMoreInfo ? "rotate" : ""}
      >
        {showMoreInfo ?
          <CardContent>
            <Typography>{description}</Typography>
          </CardContent>
          : 
          <ProyectImageCard image={picture} title={name} />
        }
        <OneBar color="primary" height="3" className="card-bar" />
        <OneBar color="info" height="2" second="true" className="card-bar" />
      </CardActionArea>
      <CardActions disableSpacing >
        <Button
          color="info"
          variant="contained"
          size="small"
          onClick={toggleMoreInfo}
        >{showMoreInfo?"Hide":"More"} Info
        </Button>
        <SplitButtonHref options={repositories} nameList={"repositories"} />
        <SplitButtonHref options={urls} nameList={"urls"} />
      </CardActions>
    </ProyectCardStyled>
  )
}