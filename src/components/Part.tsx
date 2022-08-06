import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { BoxBorder, HStack, VStack } from './Base';
import { SportsList } from '../config/sports';

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

export const LivePoint = () => {
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

export const PageList = () => {
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

export const BodyHead = () => {
  return (
    <Grid container justifyContent='space-between'>
      <Grid item md={8.7} sm={8.7}>
        <LivePoint />
      </Grid>
      <Grid item sm={3}>
        <PageList />
      </Grid>
    </Grid>
  )
}

export const SportHead = (props) => {
  const { sportId, dateList, today, qutright, favourite, live, league }: any = props;

  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' p={2} >
        {(() => {
          if (!sportId || !SportsList[sportId]) {
            return (
              <HStack>
                <SportsSoccerIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
                <Typography
                  variant='h5'
                  noWrap
                  component='h5'
                  ml={1}
                >
                  Sports
                </Typography>
              </HStack>
            )
          } else {
            return (<HStack>
              {SportsList[sportId].icon}
              <Typography
                variant='h5'
                noWrap
                component='h5'
                ml={1}
              >
                {SportsList[sportId].name}
              </Typography>
            </HStack>)
          }
        })()}
        <Stack direction='row' alignItems='center' >
          {
            favourite && (
              <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.error.dark, [`&:hover`]: { color: (theme) => theme.palette.error.light } }}>
                Favourite Events
              </Typography>
            )
          }
          {
            live && (
              <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.error.dark, [`&:hover`]: { color: (theme) => theme.palette.error.light } }}>
                Back to Live
              </Typography>
            )
          }
          {
            league && (
              <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.error.dark, [`&:hover`]: { color: (theme) => theme.palette.error.light } }}>
                Back to League
              </Typography>
            )
          }
          {
            dateList && ['01', '02', '03'].map((item, idx) => (
              <Typography key={idx} noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.success.main, [`&:hover`]: { color: (theme) => theme.palette.success.light } }}>
                {`${item}/08`}
              </Typography>
            ))
          }
          {
            today && (
              <Typography noWrap
                sx={{
                  pl: 1,
                  cursor: 'pointer',
                  color: (theme) => theme.palette.success.light,
                  [`&:hover`]: {
                    color: (theme) => theme.palette.success.light
                  }
                }}
              >
                Today
              </Typography>
            )
          }
        </Stack>
      </Stack>
      {
        qutright && (
          <Typography noWrap
            sx={{
              p: 0.5,
              cursor: 'pointer',
              textAlign: 'center',
              bgcolor: (theme) => theme.palette.error.main
            }}
          >
            Outright(40)
          </Typography>)
      }
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
        bgcolor: (theme) => theme.palette.secondary.dark,
        px: 2,
        py: 1,
        borderTop: '1px solid #3d454c'
      }}
      >
        <Box component='img' alt='slider' src={`https://images.50bet.net/images/flags/England.png`} />
        <Typography sx={{ pl: 1 }}>GERMANY BUNDESLIGA</Typography>
      </HStack>
      <HStack sx={{
        bgcolor: (theme) => theme.palette.secondary.dark,
        color: (theme) => theme.palette.error.light,
        fontSize: (theme) => theme.spacing(1.5),
        borderTop: '1px solid #3d454c',
        width: '100%',
        height: (theme) => theme.spacing(7.6)
      }}>
        <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
          Time
        </VStack>
        <VStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 )', borderRight: '1px solid #3d454c' }}>
          Event
        </VStack>
        <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 * 2)' }}>
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
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>1</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Real Espana</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 * 2)' }}>
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
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>0</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Atletico Vega Real</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 * 2)' }}>
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
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>&nbsp;&nbsp;</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Draw</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 * 2)' }}>
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

export const SportEvent = () => {
  return (
    <>
      {
        [1, 2, 3, 4, 5].map((idx: number) => (
          <SportEventMarket key={idx} {...{ idx }} />
        ))
      }
    </>
  )
}

export const SportEventMarket = (props: any) => {
  const { idx }: any = props;
  const [active, setActive] = useState(true);
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 200 }}>
      <Box>
        <HStack sx={{
          justifyContent: 'space-between',
          bgcolor: (theme) => theme.palette.secondary.dark,
          borderColor: (theme) => theme.palette.secondary.main,
          borderWidth: '1px',
          borderStyle: 'solid none none none',
          px: 2.5,
        }}
        >
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
            1X2
          </Typography>
          <IconButton onClick={() => setActive(!active)}>
            {
              active ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
          </IconButton>
        </HStack>
        <Collapse in={active} timeout="auto" unmountOnExit>
          <Box sx={{ bgcolor: '#21242ac9', py: 1, display: 'flex', flexWrap: 'wrap' }}>
            {
              [1, 2, 3, 4, 5].map((idx: number) => (
                <Grow in={true} key={idx} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 200 }}>
                  <BoxBorder sx={{ margin: 1, flexGrow: 1, width: 'calc(100% / 4)' }}>
                    <Button sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: (theme) => theme.spacing(0.5) }}>
                      <Typography sx={{ fontSize: (theme) => theme.spacing(1.5), color: '#ffffff' }}>
                        Eintracht Frankfurt / Draw
                      </Typography>
                      <Typography sx={{ color: (theme) => theme.palette.success.main, fontSize: (theme) => theme.spacing(1.5) }}>
                        2.57
                      </Typography>
                    </Button>
                  </BoxBorder>
                </Grow>
              ))
            }
          </Box>
        </Collapse>
      </Box>
    </Grow>
  )
}

export const LiveList = () => {
  const list: string[] = ['soccer', 'volleyball', 'bascketball', 'tennis', 'table tennis', 'ice hockey']
  const [active, setActive] = useState(-1);
  return (
    <HStack sx={{ justifyContent: 'flex-start' }}>
      {
        list.map((item: string, idx: number) => (
          <BoxBorder key={idx} sx={{ bgcolor: (theme) => theme.palette.background.paper, borderBottomWidth: 0, mr: 1 }}>
            <Button
              onClick={() => setActive(idx)}
              sx={{
                width: '100%',
                px: 2,
                color: active === idx ? (theme) => theme.palette.success.main : '#ffffff',
                [`&:hover`]: {
                  color: (theme) => theme.palette.success.main,
                }
              }}
            >{item}</Button>
          </BoxBorder>
        ))
      }
    </HStack >
  )
}