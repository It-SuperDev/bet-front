import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper'
import { BoxBorder } from './Base'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = () => {
  return (
    <BoxBorder sx={{ height: '100%' }}>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className='bet-swiper'
      >
        <SwiperSlide><Box component='img' alt='slider' src={require('../assets/img/slider/1.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component='img' alt='slider' src={require('../assets/img/slider/2.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component='img' alt='slider' src={require('../assets/img/slider/3.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component='img' alt='slider' src={require('../assets/img/slider/4.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component='img' alt='slider' src={require('../assets/img/slider/5.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component='img' alt='slider' src={require('../assets/img/slider/6.jpg')} /></SwiperSlide>
      </Swiper>
    </BoxBorder>
  );
}

export const PageList = () => {
  const list: { name: string, url: string }[] = [{ name: 'Home', url: 'home' }, { name: 'Live', url: 'match' }, { name: 'Bet List', url: 'bet_list' }];
  const navigate = useNavigate();

  return (
    <BoxBorder>
      <Typography
        variant='h6'
        noWrap
        component='a'
        href='/'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: (theme) => theme.palette.background.paper
        }}
      >
        <Box
          component='img'
          src={require('../assets/img/logo/logo.png')}
          alt='logo'
          sx={{ maxHeight: (theme) => theme.spacing(12) }}
        />
      </Typography>
      <List sx={{ bgcolor: (theme) => theme.palette.background.default, padding: 0 }}>
        {
          list.map((item: { name: string, url: string }, idx: number) => (
            <ListItem disablePadding key={idx}>
              <ListItemButton onClick={() => navigate(`${item.url}`)} sx={{ borderTopWidth: (theme) => theme.spacing(0.1), borderColor: (theme) => theme.palette.primary.main, borderStyle: 'solid' }}>
                <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </BoxBorder>
  )
}

export const BodyHead = () => {
  return (
    <Grid container justifyContent='space-between'>
      <Grid item md={8.5} sm={8.7}>
        <Slider />
      </Grid>
      <Grid item sm={3}>
        <PageList />
      </Grid>
    </Grid>
  )
}

export const SportHead = () => {
  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' p={2} >
        <Stack direction='row' alignItems='center' >
          <SportsSoccerIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
          <Typography
            variant='h5'
            noWrap
            component='h5'
            ml={1}
          >
            Soccer
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='center' >
          <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.error.dark, [`&:hover`]: { color: (theme) => theme.palette.error.light } }}>
            Favourite Events
          </Typography>
          {
            ['01', '02', '03'].map((item, idx) => (
              <Typography key={idx} noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.success.main, [`&:hover`]: { color: (theme) => theme.palette.success.light } }}>
                {`${item}/08`}
              </Typography>
            ))
          }
          <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.success.light, [`&:hover`]: { color: (theme) => theme.palette.success.light } }}>
            Today
          </Typography>
        </Stack>
      </Stack>
      <Typography noWrap sx={{ p: 0.5, cursor: 'pointer', textAlign: 'center', bgcolor: (theme) => theme.palette.error.main }}>
        Outright(40)
      </Typography>
    </Box>
  )
}

export const SportBody = () => {
  return (
    <Grid container sx={{ bgcolor: '#21242ac9', padding: 1 }}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((idx: number) => (
          <Grow in={true} key={idx} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 50 }}>
            <Grid item md={4} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: '1px solid #4a4d56', [`&:hover`]: { bgcolor: (theme) => theme.palette.background.paper, color: (theme) => theme.palette.error.light } }}>
              <Box component='img' alt='slider' src={`https://images.50bet.net/images/flags/England.png`} sx={{ mx: 1 }} />
              <Typography noWrap sx={{ fontSize: (theme) => theme.spacing(1.6) }}>
                England Premier
              </Typography>
            </Grid>
          </Grow>
        ))
      }
    </Grid>
  )
}