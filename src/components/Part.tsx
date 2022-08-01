import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper'
import { BoxBorder } from './Base'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = () => {
  return (
    <BoxBorder>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="bet-swiper"
      >
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/1.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/2.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/3.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/4.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/5.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/6.jpg')} /></SwiperSlide>
      </Swiper>
    </BoxBorder>
  );
}

export const PageList = () => {
  const list = ['Home', 'Live', 'Bet List'];
  return (
    <BoxBorder>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: (theme) => theme.palette.background.paper
        }}
      >
        <Box
          component="img"
          src={require('../assets/img/logo/logo.png')}
          alt='logo'
          sx={{ maxHeight: (theme) => theme.spacing(12) }}
        />
      </Typography>
      <List sx={{ bgcolor: (theme) => theme.palette.background.default, padding: 0 }}>
        {
          list.map((item, idx) => (
            <ListItem disablePadding key={idx}>
              <ListItemButton sx={{ borderTopWidth: (theme) => theme.spacing(0.1), borderColor: (theme) => theme.palette.primary.main, borderStyle: 'solid' }}>
                <ListItemText primary={item} sx={{ textAlign: 'center' }} />
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
      <Grid item md={8.5}>
        <Slider />
      </Grid>
      <Grid item md={3}>
        <PageList />
      </Grid>
    </Grid>
  )
}