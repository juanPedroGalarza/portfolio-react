import { CardMedia, Typography } from "@mui/material";
import ProyectImageStyled from "../StyledComponents/proyects/ProyectImageStyled";

export default function ProyectImageCard(props) {
  const {image, title} = props
  return (
    <ProyectImageStyled>
      <CardMedia
        component="img"
        image={image}
        heigt="100%"
        alt={title}
      />
      <Typography
        variant="h4"
        align="center"
        paragraph>
        {title}
      </Typography>
    </ProyectImageStyled>
  )
}