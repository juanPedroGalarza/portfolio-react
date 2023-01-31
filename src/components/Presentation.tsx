import { Grid, Typography, Button, Icon } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import PresentationStyled from "./StyledComponents/PresentationStyled"

export default function Presentation() {
  return (
    <PresentationStyled container spacing={4}>
      <Grid item sm={12} md={10} lg={8} xl={7} className="title-presentation">
        <Typography variant="h1" >
          Juan Pedro Galarza
        </Typography>
      </Grid>
      <Grid item sm={12} md={10} lg={8} xl={7} className="subtitle-presentation">
        <Typography variant="h3">
          A web developer
        </Typography>
      </Grid>
      <Grid item sm={12} md={10} lg={8} xl={7}>
        <Typography variant="subtitle1">
          The world moves fast... I want it to be even faster.
        </Typography>
        <Button
          component={Link}
          variant="outlined"
          to="/proyects"
          endIcon={<Icon>arrow_forward_ios_rounded</Icon>}>
          View Work
        </Button>
      </Grid>
    </PresentationStyled>
  )
}