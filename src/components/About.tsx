import React from "react"
import { Grid, Paper, Typography } from "@mui/material";
import AboutStyled from "./StyledComponents/AboutStyled";

export default function About() {
  return (
    <AboutStyled id="about">
      <Typography variant="h3" paragraph textAlign="center">About</Typography>
      <Grid container spacing={5}>
        <Grid
          item
          sm={12}
          lg={6}
          className="about-col"
        >
          <Typography variant="h4">
            Hi! My name is Juan, nice to meet you
          </Typography>
          <Typography variant="body2">
            {"ヾ(≧ ▽ ≦)ゝ"}
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          lg={6}
          className="about-col"
        >
          <Typography variant="body1">
            I am a full stack MERN and mobile web developer, I graduated from the MindHub LA bootcamp,
            where I have +700hs. development using HTML, CSS, Javascript, React.js, Node.js, Express,
            MongoDB, Git and React Native using Agile/SCRUM methodologies through simulation
            of a real work environment from Learn by Doing.
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          className="about-col"
        >
          <Typography variant="body1">
            During my course I had several opportunities in which I had to work as a team,
            thanks to this I realized that I have a facility to integrate and apply knowledge
            recently purchased. I decided to use it in favor of my team and give a hand to my teammates,
            assuming tasks of greater responsibility.
          </Typography>
        </Grid>
      </Grid>
    </AboutStyled>
  )
}