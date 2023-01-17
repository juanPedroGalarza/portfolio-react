import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { OneBar } from "../StyledComponents/BackgroundBars";
import ProyectCardStyled from "../StyledComponents/proyects/ProyectCardStyled";

export default function ProyectCard(props) {
  const {img, proyectName} = props.data
  return (
    <ProyectCardStyled>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          heigt="140"
          alt={proyectName}
        />
        <CardContent>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut necessitatibus voluptates ad iste nemo. Consequuntur qui, laborum nihil natus porro ducimus.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
        >More Info</Button>
      </CardActions>
      <OneBar color="primary" height="3" />
    </ProyectCardStyled>
  )
}