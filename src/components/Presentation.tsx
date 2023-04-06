import { Grid, Typography, Button, Icon, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SplitButtonHref from "./buttons/SplitButtonHref";
import PresentationStyled from "./StyledComponents/PresentationStyled";

export default function Presentation() {
  const resumeList: Array<{ url: string; name: string }> = [
    {
      name: "Spanish",
      url: "https://drive.google.com/file/d/1T-NBvmkCkfTbWrLRbvYF7CGEL2urdYVV/view?usp=share_link",
    },
    {
      name: "English",
      url: "https://drive.google.com/file/d/1msAzvrQ4QCrC5yT6KIlD3qLaR9ZDTNe1/view?usp=share_link",
    },
  ];

  return (
    <PresentationStyled container spacing={4}>
      <Grid item sm={12} md={10} lg={8} xl={7} className='title-presentation'>
        <Typography
          variant='h1'
          sx={{
            backgroundImage: `url("https://media.giphy.com/media/WQr1oECbU3AqMfc8fB/giphy.gif")`,
            backgroundSize: "cover",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Changa One'",
          }}>
          Juan Pedro Galarza
        </Typography>
      </Grid>
      <Grid
        item
        sm={12}
        md={10}
        lg={8}
        xl={7}
        className='subtitle-presentation'>
        <Typography variant='h3'>Full Stack web dev</Typography>
      </Grid>
      <Grid item sm={12} md={10} lg={8} xl={7}>
        <Typography variant='subtitle1'>
          The world moves fast... I want it to be even faster 🚀✨
        </Typography>
        <Box>
          <SplitButtonHref options={resumeList}>
            <Icon>assignment_ind_icon</Icon>
            <Typography sx={{ paddingLeft: 1 }}>Resume</Typography>
          </SplitButtonHref>
          <Button
            component={Link}
            variant='outlined'
            size='small'
            color='warning'
            to='/proyects'
            sx={{ textTransform: "none" }}
            endIcon={<Icon>arrow_forward_ios_rounded</Icon>}>
            <Typography>View Work</Typography>
          </Button>
        </Box>
      </Grid>
    </PresentationStyled>
  );
}
