import Loading from '../components/Loading.js';
import MainStyled from '../components/StyledComponents/MainStyled.js';
import { Grid2, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import { StoreInterface } from '../redux/store.js';
import { Proyect } from '../features/data/proyectsData.js';
import { ProyectsState } from '../redux/slices/proyectsSlice.js';

const ProyectCard = React.lazy(
  () => import('../components/proyects/ProyectCard.js')
);

export default function Proyects(): JSX.Element {
  const { proyects }: ProyectsState = useSelector(
    (state: StoreInterface): ProyectsState => state.proyectsData
  );

  function printCards(item: Proyect, index: number) {
    return (
      <Grid2 size={{ xs: 12, sm: 6, md: 5, lg: 4 }} key={index}>
        <ProyectCard data={item} />
      </Grid2>
    );
  }
  return (
    <MainStyled sx={{ gap: 1, justifyContent: 'space-between' }}>
      <Typography variant='h2' sx={{ fontFamily: "'Work Sans'" }}>
        My Proyects
      </Typography>
      <Grid2 container spacing={5} sx={{ justifyContent: 'center' }}>
        <React.Suspense fallback={<Loading />}>
          {proyects.map(printCards)}
        </React.Suspense>
      </Grid2>
    </MainStyled>
  );
}
