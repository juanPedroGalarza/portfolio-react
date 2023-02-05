import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Icon,
  Typography
} from "@mui/material";
import React from "react";
import { Proyect } from "../../features/proyects/proyectsData";
import SplitButtonHref from "../buttons/SplitButtonHref";
import { OneBar } from "../StyledComponents/BackgroundBars";
import ProyectCardStyled from "../StyledComponents/proyects/ProyectCardStyled";
import ProyectImageCard from "./ProyectImageCard";

interface MyProps {
  data: Proyect
};

export default function ProyectCard({data}:MyProps):JSX.Element {
  const {
    picture,
    name,
    description,
    repositories,
    urls
  }: Proyect = data;

  const [showMoreInfo, setShowMoreInfo]:
    [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    = React.useState<boolean>(false);
  const toggleMoreInfo: VoidFunction
    = (): void => setShowMoreInfo((v: boolean): boolean => !v);

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
            {Array.isArray(description) ?
              description.map((t: string, i: number): JSX.Element =>
                (<Typography key={i}>{t}</Typography>))
              : <Typography>{description}</Typography>}
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
          sx={{
            color: "#fff",
            textTransform: "none"
          }}
          endIcon={<Icon>{showMoreInfo ? "arrow_drop_up_icon" : "arrow_drop_down_icon"}</Icon>}
        >
          Info
        </Button>
        <SplitButtonHref options={repositories}>Repostitories</SplitButtonHref>
        {urls ? <SplitButtonHref options={urls}>Sites</SplitButtonHref> : null}
      </CardActions>
    </ProyectCardStyled>
  );
};