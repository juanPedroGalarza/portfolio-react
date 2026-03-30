import { Grid2, Typography, Button, Icon, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SplitButtonHref from './buttons/SplitButtonHref.js';
import PresentationStyled from './StyledComponents/PresentationStyled.js';
import { UrlNamed } from '../features/data/proyectsData.js';

export default function Presentation() {
  const resumeList: Array<UrlNamed> = [
    {
      name: 'Spanish',
      url: 'https://drive.google.com/file/d/1YZw-0RX9v_sPxgxfFJygZ2vkhn1JQmjl/view?usp=sharing',
    },
    {
      name: 'English',
      url: 'https://drive.google.com/file/d/121f2bRjpHxeV-inhEjKnjad2jlOOh2x5/view?usp=sharing',
    },
  ];
  const workList: Array<UrlNamed> = [
    {
      name: 'Proyects',
      url: '/proyects',
    },
    {
      name: 'Experience',
      url: '/experience',
    },
  ];

  return (
    <PresentationStyled container spacing={4}>
      <Grid2
        size={{ sm: 12, md: 10, lg: 8, xl: 7 }}
        className='title-presentation'>
        <Typography
          variant='h1'
          sx={{
            backgroundImage: `url("https://media.giphy.com/media/WQr1oECbU3AqMfc8fB/giphy.gif")`,
            backgroundSize: 'cover',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Changa One'",
          }}>
          Juan Pedro Galarza
        </Typography>
      </Grid2>
      <Grid2
        size={{ sm: 12, md: 10, lg: 8, xl: 7 }}
        className='subtitle-presentation'>
        <Typography variant='h3'>Full Stack web dev</Typography>
      </Grid2>
      <Grid2 size={{ sm: 12, md: 10, lg: 8, xl: 7 }}>
        <Typography variant='subtitle1'>
          The world moves fast... I want it to be even faster 🚀✨
        </Typography>
        <Box>
          <SplitButtonHref options={resumeList}>
            <Icon>assignment_ind_icon</Icon>
            <Typography sx={{ paddingLeft: 1 }}>Resume</Typography>
          </SplitButtonHref>
          <SplitButtonHref
            color='warning'
            variant='outlined'
            disableBlankTarget
            endIcon={<Icon>arrow_forward_ios_rounded</Icon>}
            options={workList}>
            <Typography>View Work</Typography>
          </SplitButtonHref>
        </Box>
      </Grid2>
    </PresentationStyled>
  );
}
