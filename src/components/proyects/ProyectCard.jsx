import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { OneBar } from "../StyledComponents/BackgroundBars";
import ProyectCardStyled from "../StyledComponents/proyects/ProyectCardStyled";

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
      >
        {showMoreInfo ?
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut necessitatibus voluptates ad iste nemo. Consequuntur qui, laborum nihil natus porro ducimus.
            </Typography>
          </CardContent>
          : <CardMedia
            component="img"
            image={img}
            heigt="250"
            alt={proyectName}
          />
        }
        <OneBar color="primary" height="3" />
        <OneBar color="primary" height="2" second="true" />
      </CardActionArea>
      <CardActions>
        <Button
          color="primary"
          variant="outlained"
          onClick={toggleMoreInfo}
        >More Info</Button>
        <Button
          color="primary"
          variant="outlained"
        >Repository</Button>
        <Button
          color="primary"
          variant="outlained"
        >View proyect</Button>
      </CardActions>
    </ProyectCardStyled>
  )
}