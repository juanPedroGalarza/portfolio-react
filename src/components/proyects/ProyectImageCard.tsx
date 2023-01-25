import * as React from "react";
import { CardMedia, Typography } from "@mui/material";
import ProyectImageStyled from "../StyledComponents/proyects/ProyectImageStyled";

interface PropsInterface {
  image: string,
  title: string
}

const ProyectImageCard: React.FC<PropsInterface> = ({image, title}) => {
  return (
    <ProyectImageStyled>
      <CardMedia
        component="img"
        image={image}
        height="100%"
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
export default ProyectImageCard