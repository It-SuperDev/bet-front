import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { BoxBorder, HStack, VStack } from './Base';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
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

const LivePoint = () => {
  return (
    <BoxBorder sx={{ height: '100%' }}>
      <VStack sx={{
        py: theme => theme.spacing(2.5),
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundImage: `url(${require('../assets/img/background/scoreboard.jpg')})`
      }}>
        <BoxBorder sx={{ width: '75%', bgcolor: '#21242ac9', py: 1 }}>
          <HStack>
            <Box component='img' alt='slider' src={`https://images.50bet.net/images/flags/England.png`} />
            <Typography sx={{ pl: 1 }}>GERMANY BUNDESLIGA</Typography>
          </HStack>
        </BoxBorder>
        <HStack sx={{ minHeight: (theme) => theme.spacing(15), width: '75%', justifyContent: 'space-between', }}>
          <BoxBorder sx={{ width: 'calc(100% / 3 - 8px)', bgcolor: '#21242ac9', height: '100%' }}>
            <HStack sx={{ width: '100%', height: '100%' }}>
              <Typography variant="h5">
                Lotte Giants
              </Typography>
            </HStack>
          </BoxBorder>
          <BoxBorder sx={{ width: 'calc(100% / 3 - 8px)', bgcolor: '#21242ac9', height: '100%' }}>
            <HStack sx={{ width: '100%', height: '100%' }}>
              <Typography variant="h3">
                1 : 0
              </Typography>
            </HStack>
          </BoxBorder>
          <BoxBorder sx={{ width: 'calc(100% / 3 - 8px)', bgcolor: '#21242ac9', height: '100%' }}>
            <HStack sx={{ width: '100%', height: '100%' }}>
              <Typography variant="h5">
                Lotte Giants
              </Typography>
            </HStack>
          </BoxBorder>
        </HStack>
      </VStack>
    </BoxBorder>
  )
}

const PageList = () => {
  const list: { name: string, url: string }[] = [{ name: 'Home', url: 'home' }, { name: 'Live', url: 'live' }, { name: 'Bet List', url: 'bet_list' }];
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
              <ListItemButton onClick={() => navigate(`${item.url}`)} sx={{ borderTopWidth: (theme) => theme.spacing(0.1), borderColor: (theme) => theme.palette.secondary.main, borderStyle: 'solid' }}>
                <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </BoxBorder>
  )
}

const BodyHeader = () => {
  const [event, setEvent] = useState<Boolean>(false);
  useEffect(() => {
    setEvent(false);
  }, []);
  return (
    <Grid container justifyContent='space-between'>
      <Grid item md={8.7} sm={8.7}>
        {
          event ? <LivePoint /> : <Slider />
        }
      </Grid>
      <Grid item sm={3}>
        <PageList />
      </Grid>
    </Grid>
  )
}

export default BodyHeader