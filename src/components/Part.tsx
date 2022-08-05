import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper'
import { BoxBorder, HStack, VStack } from './Base'

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

export const BodyHead = () => {
  return (
    <Grid container justifyContent='space-between'>
      <Grid item md={8.7} sm={8.7}>
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
          {/* {
            ['01', '02', '03'].map((item, idx) => (
              <Typography key={idx} noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.success.main, [`&:hover`]: { color: (theme) => theme.palette.success.light } }}>
                {`${item}/08`}
              </Typography>
            ))
          }
          <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.success.light, [`&:hover`]: { color: (theme) => theme.palette.success.light } }}>
            Today
          </Typography> */}
        </Stack>
      </Stack>
      {/* <Typography noWrap sx={{ p: 0.5, cursor: 'pointer', textAlign: 'center', bgcolor: (theme) => theme.palette.error.main }}>
        Outright(40)
      </Typography> */}
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

const Result = () => {
  return (
    <Button sx={{ color: '#ffffff', borderRight: '1px solid #3d454c', borderRadius: 0, width: 'calc(100% / 3)', justifyContent: 'center', height: '100%', px: (theme) => theme.spacing(0.5) }}>
      {/* <KeyboardArrowUpIcon sx={{ fontSize: (theme) => theme.spacing(1.75) }} /> */}
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5), display: 'flex', alignItems: 'center' }}>
        2.54
      </Typography>
    </Button>
  )
}

const Handicup = () => {
  return (
    <Button sx={{ color: '#ffffff', borderRight: '1px solid #3d454c', borderRadius: 0, width: 'calc(100% / 3)', justifyContent: 'space-between', height: '100%', px: (theme) => theme.spacing(0.5) }}>
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5), display: 'flex', alignItems: 'center' }}>
        {/* <KeyboardArrowUpIcon sx={{ fontSize: (theme) => theme.spacing(1.75) }} /> */}
        +2
      </Typography>
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5) }}>
        2.54
      </Typography>
    </Button>
  )
}

const OverUpder = () => {
  return (
    <Button sx={{ color: '#ffffff', borderRadius: 0, width: 'calc(100% / 3)', justifyContent: 'space-between', height: '100%', px: (theme) => theme.spacing(0.5) }}>
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5), display: 'flex', alignItems: 'center' }}>
        {/* <KeyboardArrowUpIcon sx={{ fontSize: (theme) => theme.spacing(1.75) }} /> */}
        O 1.5
      </Typography>
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5) }}>
        2.54
      </Typography>
    </Button>
  )
}

export const SportLeague = () => {
  const matchs: number[] = [0, 1, 2];
  return (
    <Stack>
      <HStack sx={{ 
        justifyContent: 'flex-start', 
        bgcolor: (theme) => theme.palette.background.paper, 
        px: 2, 
        py: 1, 
        borderTop: '1px solid #3d454c' }}
        >
        <Box component='img' alt='slider' src={`https://images.50bet.net/images/flags/England.png`} />
        <Typography sx={{ pl: 1 }}>GERMANY BUNDESLIGA</Typography>
      </HStack>
      <HStack sx={{
        bgcolor: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.error.light,
        fontSize: (theme) => theme.spacing(1.5),
        borderTop: '1px solid #3d454c',
        width: '100%',
        height: (theme) => theme.spacing(7.6)
      }}>
        <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
          Time
        </VStack>
        <VStack sx={{ height: '100%', width: 'calc(33.33333% - 36.66667px)', borderRight: '1px solid #3d454c' }}>
          Event
        </VStack>
        <HStack sx={{ height: '100%', width: 'calc(66.66667% - 73.33333px)' }}>
          <VStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
            <VStack sx={{ height: '50%', width: '100%' }}>Full Time</VStack>
            <HStack sx={{ height: '50%', width: '100%', borderTop: '1px solid #3d454c' }}>
              <HStack sx={{ height: '100%', width: 'calc(100% / 3)', borderRight: '1px solid #3d454c' }}>
                1X2
              </HStack>
              <HStack sx={{ height: '100%', width: 'calc(100% / 3)', borderRight: '1px solid #3d454c' }}>
                HDP
              </HStack>
              <HStack sx={{ height: '100%', width: 'calc(100% / 3)', }}>
                OU
              </HStack>
            </HStack>
          </VStack>
          <VStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
            <VStack sx={{ height: '50%', width: '100%' }}>Full Time</VStack>
            <HStack sx={{ height: '50%', width: '100%', borderTop: '1px solid #3d454c' }}>
              <VStack sx={{ height: '100%', width: 'calc(100% / 3)', borderRight: '1px solid #3d454c' }}>
                1X2
              </VStack>
              <VStack sx={{ height: '100%', width: 'calc(100% / 3)', borderRight: '1px solid #3d454c' }}>
                HDP
              </VStack>
              <VStack sx={{ height: '100%', width: 'calc(100% / 3)', }}>
                OU
              </VStack>
            </HStack>
          </VStack>
        </HStack>
        <VStack sx={{ width: 30 }}>M</VStack>
      </HStack>


      <Stack sx={{ bgcolor: (theme) => theme.palette.background.default }}>
        {
          matchs.map((idx: number) => (
            <SportMatch key={idx} idx={idx} />
          ))
        }
      </Stack>

    </Stack>
  )
}

export const SportMatch = (props: any) => {
  const { idx }: any = props
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 200 }}>
      <VStack>
        <HStack sx={{
          fontSize: (theme) => theme.spacing(1.5),
          borderTop: '1px solid #3d454c',
          width: '100%',
          justifyContent: 'flex-start',
          height: (theme) => theme.spacing(5)
        }}>
          <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
            <IconButton>
              <StarBorderIcon />
            </IconButton>
          </VStack>
          <HStack sx={{ height: '100%', width: 'calc(33.33333% - 36.66667px)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>1</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Real Espana</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc(66.66667% - 73.33333px)' }}>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
          </HStack>
          <HStack />
        </HStack>

        <HStack sx={{
          fontSize: (theme) => theme.spacing(1.5),
          width: '100%',
          justifyContent: 'flex-start',
          height: (theme) => theme.spacing(5)
        }}>
          <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>58'</Typography>
          </VStack>
          <HStack sx={{ height: '100%', width: 'calc(33.33333% - 36.66667px)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>0</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Atletico Vega Real</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc(66.66667% - 73.33333px)' }}>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
          </HStack>
          <VStack>
            <IconButton sx={{ fontSize: (theme) => theme.spacing(1.5), width: 30 }}>+10</IconButton>
          </VStack>
        </HStack>

        <HStack sx={{
          fontSize: (theme) => theme.spacing(1.5),
          width: '100%',
          justifyContent: 'flex-start',
          height: (theme) => theme.spacing(5)
        }}>
          <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
          </VStack>
          <HStack sx={{ height: '100%', width: 'calc(33.33333% - 36.66667px)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>&nbsp;&nbsp;</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Draw</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc(66.66667% - 73.33333px)' }}>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
          </HStack>
          <VStack />
        </HStack>
      </VStack >
    </Grow>
  )
}