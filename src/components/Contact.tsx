import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { StoreInterface } from '../redux/store.js';
import { ThemeState } from '../features/theme/themeSlice.js';

interface NetworkItem {
  name: string;
  image: string;
  href: string;
  sub: string;
}

export default function Contact(): JSX.Element {
  const { themeName } = useSelector(
    (state: StoreInterface): ThemeState => state.theme
  );

  function printNetwork(item: NetworkItem): JSX.Element {
    return (
      <Grid2 size={{ xs: 12, sm: 6 }} key={item.name}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography color='secondary'>{item.name}</Typography>
          <Button
            startIcon={
              <img
                src={item.image}
                alt={item.name}
                style={{
                  height: 50,
                  width: 50,
                  filter: themeName === 'dark' ? 'invert(100%)' : null,
                }}
              />
            }
            href={item.href}
            color='inherit'
            variant='text'
            sx={{ textTransform: 'none' }}>
            <Typography>{item.sub}</Typography>
          </Button>
        </Box>
      </Grid2>
    );
  }

  const listNetwork: Array<NetworkItem> = [
    {
      name: 'GitHub',
      image: 'https://i.postimg.cc/MK7C7W9w/logo-github.png',
      href: 'https://github.com/juanPedroGalarza',
      sub: 'juanPedroGalarza',
    },
    {
      name: 'Linkedin',
      image: 'https://i.postimg.cc/sfhd2PSv/logo-linkedin.png',
      href: 'https://www.linkedin.com/in/juan-pedro-galarza',
      sub: 'juan pedro galarza',
    },
    {
      name: 'Phone',
      image: 'https://i.postimg.cc/FzHYy9SH/logo-phone.png',
      href: 'tel:+5403425588401',
      sub: '+5403425588401',
    },
    {
      name: 'Mail',
      image: 'https://i.postimg.cc/J7ybZ4c2/logo-mail.png',
      href: 'mailto:juanpg232@gmail.com',
      sub: 'juanpg232@gmail.com',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      id='contact'>
      <Typography variant='h4' paragraph>
        Contact me
      </Typography>
      <Grid2
        container
        spacing={5}
        wrap='wrap'
        sx={{
          marginTop: '5rem',
          marginBottom: '5rem',
        }}>
        {listNetwork.map(printNetwork)}
      </Grid2>
    </Box>
  );
}
