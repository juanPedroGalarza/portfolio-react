import { Button, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { OneBar } from "../StyledComponents/BackgroundBars";
import ProyectCardStyled from "../StyledComponents/proyects/ProyectCardStyled";
import ProyectImageCard from "./ProyectImageCard";

export default function ProyectCard(props) {
  const { img, proyectName } = props.data
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut necessitatibus voluptates ad iste nemo. Consequuntur qui, laborum nihil natus porro ducimus.
            </Typography>
          </CardContent>
          : 
          <ProyectImageCard image={img} title={proyectName} />
        }
        <OneBar color="primary" height="3" className="card-bar" />
        <OneBar color="info" height="2" second="true" className="card-bar" />
      </CardActionArea>
      <CardActions disableSpacing >
        <Button
          color="info"
          variant="outlined"
          size="small"
          onClick={toggleMoreInfo}
        >{showMoreInfo?"Hide":"More"} Info
        </Button>
        <Button
          color="warning"
          variant="outlined"
          size="small"
        >Repository</Button>
        <Button
          color="error"
          variant="outlined"
          size="small"
        >View proyect</Button>
      </CardActions>
    </ProyectCardStyled>
  )
}