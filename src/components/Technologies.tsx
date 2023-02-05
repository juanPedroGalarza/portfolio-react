import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { StoreInterface } from "../features/store";
import { ThemeState } from "../features/theme/themeSlice";
import TechnologiesStyled from "./StyledComponents/TechnologiesStyled";

interface TechItem {
  name: string,
  image: string
};

interface TechList {
  category: string,
  techs: Array<TechItem>
};

const techData: Array<TechList> = [
  {
    category: "Front End",
    techs: [
      {
        name: "HTML",
        image: "https://i.postimg.cc/bNfXSGHL/logo-html.png"
      },
      {
        name: "CSS",
        image: "https://i.postimg.cc/NMZ34Lhs/logo-css.png"
      },
      {
        name: "Bootstrap",
        image: "https://i.postimg.cc/FRmdKbsc/logo-bootstrap.png"
      },
      {
        name: "JavaScript",
        image: "https://i.postimg.cc/3NpPb77g/logo-js.png"
      },
      {
        name: "TypeScript",
        image: "https://i.postimg.cc/1Rvn9qxn/logo-typescript.png"
      },
      {
        name: "React JS & Native",
        image: "https://i.postimg.cc/Gh9B9mrM/logo-react.png"
      },
      {
        name: "Redux & Toolkit",
        image: "https://i.postimg.cc/J4gsXCzR/logo-redux.png"
      },
      {
        name: "Material ui",
        image: "https://i.postimg.cc/NjZDLBCf/logo-material-ui.png"
      },
    ]
  },
  {
    category: "Back End",
    techs: [
      {
        name: "Node JS",
        image: "https://i.postimg.cc/JnqyHyGF/logo-node.png"
      },
      {
        name: "Express",
        image: "https://i.postimg.cc/rsZKgvGC/logo-express.png"
      },
      {
        name: "MongoDB",
        image: "https://i.postimg.cc/JzR9K9Fk/logo-mongodb.png"
      },
    ]
  },
];





export default function Technologies(): JSX.Element {
  const { themeName } = useSelector((state: StoreInterface):ThemeState => state.theme);

  function printTech(tech:TechItem): JSX.Element {
    return (
      <Grid item xs={12} sm={5} md={8} lg={6} key={tech.name}>
        <Box>
          <img src={tech.image} alt={tech.name} className="image-tech" />
          <Typography variant="h5" align="center">{tech.name}</Typography>
        </Box>
      </Grid>
    );
  };
  function printTechList(techList: TechList): JSX.Element {
    return (
      <Grid item sm={12} md={4} lg={5} xl={4} key={techList.category}>
        <Box>
          <Typography variant="h4" paragraph>{techList.category}</Typography>
          <Grid container spacing={3}>
            {techList.techs.map(printTech)}
          </Grid>
        </Box>
      </Grid>
    );
  };

  return (
    <TechnologiesStyled container spacing={5} themename={themeName}>
      <Typography variant="h4" align="center">Technologies</Typography>
      {techData.map(printTechList)}
    </TechnologiesStyled>
  );
};