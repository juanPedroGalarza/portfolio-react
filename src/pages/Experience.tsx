import Loading from '../components/Loading.js';
import MainStyled from '../components/StyledComponents/MainStyled.js';
import { Grid2, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import { StoreInterface } from '../redux/store.js';
import JobCard from '../components/proyects/JobCard.js';
import { JobsState } from '../redux/slices/jobsSlice.js';
import { Job } from '../features/data/jobsData.js';

export default function Experience(): JSX.Element {
  const { jobs }: JobsState = useSelector(
    (state: StoreInterface): JobsState => state.jobsData
  );

  function printCards(item: Job, index: number) {
    return (
      <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
        <JobCard data={item} />
      </Grid2>
    );
  }
  return (
    <MainStyled sx={{ gap: 1, justifyContent: 'space-between' }}>
      <Typography variant='h2' sx={{ fontFamily: "'Work Sans'" }}>
        My Experience
      </Typography>
      <Grid2
        container
        spacing={5}
        sx={{ justifyContent: 'center', width: '100%' }}>
        <React.Suspense fallback={<Loading />}>
          {jobs.map(printCards)}
        </React.Suspense>
      </Grid2>
    </MainStyled>
  );
}
