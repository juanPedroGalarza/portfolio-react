import * as React from "react";
import { CardMedia, Typography } from "@mui/material";
import ProyectImageStyled from "../StyledComponents/proyects/ProyectImageStyled";

interface PropsInterface {
  image?: string,
  title: string
};

const ProyectImageCard: React.FC<PropsInterface> = ({ image, title }): JSX.Element => {
  return (
    <ProyectImageStyled>
      <CardMedia
        component="img"
        image={image?image:"https://i.postimg.cc/MHvXr2Y4/default.png"}
        height="100%"
        alt={title}
      />
      <Typography
        variant="h4"
        align="center"
        paragraph>
        {title.split("-").join(" ")}
      </Typography>
    </ProyectImageStyled>
  );
};
export default ProyectImageCard;