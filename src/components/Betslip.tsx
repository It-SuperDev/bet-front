import * as React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

import { BoxBorder, HStack, VStack } from './Base';
import { SportsList } from '../config/sports';

const SingleSlip = (props: any) => {
  const { idx }: any = props;
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 200 }}>
      <VStack sx={{ padding: 2, alignItems: 'stretch', borderWidth: '1px', borderStyle: 'none none solid none', borderColor: (theme) => theme.palette.secondary.light, bgcolor: (theme) => theme.palette.background.default }}>
        <HStack sx={{ justifyContent: 'space-between', }}>
          <HStack>
            {SportsList['1'].icon(3)}
            <Typography sx={{ ml: 1 }}>
              Soccer
            </Typography>
          </HStack>
          <IconButton
            sx={{
              bgcolor: (theme) => theme.palette.error.light,
              padding: (theme) => theme.spacing(0.2),
              borderRadius: 0,
              [`&:hover`]: { bgcolor: (theme) => theme.palette.error.dark }
            }}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        </HStack>
        <Typography sx={{ color: (theme) => theme.palette.success.light, fontSize: (theme) => theme.spacing(1.75), mt: (theme) => theme.spacing(0.5) }}>
          KOREA K LEAGUE CHALLENGE
        </Typography>
        <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75), }}>
            Gyeongnam FC
          </Typography>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
            0
          </Typography>
        </HStack>
        <Typography sx={{ mt: (theme) => theme.spacing(0.5), fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.secondary.light }}>
          VS
        </Typography>
        <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75), }}>
            Gyeongnam FC
          </Typography>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
            0
          </Typography>
        </HStack>
        <HStack sx={{ justifyContent: 'flex-start', mt: (theme) => theme.spacing(0.5) }}>
          <Box
            sx={{
              px: 0.5,
              py: 0,
              mr: 1,
              borderRadius: 0,
              minWidth: (theme) => theme.spacing(0),
              fontSize: (theme) => theme.spacing(1.25),
              bgcolor: (theme) => theme.palette.error.main,
            }}
          >LIVE
          </Box>
          <Box sx={{ fontSize: (theme) => theme.spacing(1.5), }}>Full Time</Box>
        </HStack>
        <HStack sx={{ justifyContent: 'flex-start', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.75) }}>
            Real Madrid@
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.75) }}>
            1.5
          </Typography>
        </HStack>
        <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(1) }}>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
            Stack :
          </Typography>
          <OutlinedInput
            // value={values.user}
            // placeholder="Stack"
            // onChange={handleChange('user')}
            // type='number'
            sx={{
              [`fieldset`]: {
                display: 'none'
              },
              [`input`]: {
                py: 0.5,
                px: 1.5,
                width: '100%'
              },
              width: '60%',
              border: '1px solid gray',
              borderRadius: 0,
              bgcolor: '#21242ac9',
              fontSize: (theme) => theme.spacing(1.75)
            }}
          />
        </HStack>
        <HStack sx={{ justifyContent: 'flex-start', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontWeight: 700, mr: 0.5, fontSize: (theme) => theme.spacing(1.75) }}>
            Win :
          </Typography>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
            4000
          </Typography>
        </HStack>
        <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.secondary.light }}>
            Min :
          </Typography>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.success.main }}>
            100
          </Typography>
        </HStack>
        <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.secondary.light }}>
            Max :
          </Typography>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.success.main }}>
            1200
          </Typography>
        </HStack>
      </VStack>
    </Grow>
  )
}

const MixSlip = (props: any) => {
  const { idx }: any = props;
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 200 }}>
      <VStack sx={{ padding: 2, alignItems: 'stretch', borderWidth: '1px', borderStyle: 'none none solid none', borderColor: (theme) => theme.palette.secondary.light, bgcolor: (theme) => theme.palette.background.default }}>
        <HStack sx={{ justifyContent: 'space-between', }}>
          <HStack>
            {SportsList['1'].icon(3)}
            <Typography sx={{ ml: 1 }}>
              Soccer
            </Typography>
          </HStack>
          <IconButton
            sx={{
              bgcolor: (theme) => theme.palette.error.light,
              padding: (theme) => theme.spacing(0.2),
              borderRadius: 0,
              [`&:hover`]: { bgcolor: (theme) => theme.palette.error.dark }
            }}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        </HStack>
        <Typography sx={{ color: (theme) => theme.palette.success.light, fontSize: (theme) => theme.spacing(1.75), mt: (theme) => theme.spacing(0.5) }}>
          KOREA K LEAGUE CHALLENGE
        </Typography>
        <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75), }}>
            Gyeongnam FC
          </Typography>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
            0
          </Typography>
        </HStack>
        <Typography sx={{ mt: (theme) => theme.spacing(0.5), fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.secondary.light }}>
          VS
        </Typography>
        <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75), }}>
            Gyeongnam FC
          </Typography>
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
            0
          </Typography>
        </HStack>
        <HStack sx={{ justifyContent: 'flex-start', mt: (theme) => theme.spacing(0.5) }}>
          <Box
            sx={{
              px: 0.5,
              py: 0,
              mr: 1,
              borderRadius: 0,
              minWidth: (theme) => theme.spacing(0),
              fontSize: (theme) => theme.spacing(1.25),
              bgcolor: (theme) => theme.palette.error.main,
            }}
          >LIVE
          </Box>
          <Box sx={{ fontSize: (theme) => theme.spacing(1.5), }}>Full Time</Box>
        </HStack>
        <HStack sx={{ justifyContent: 'flex-start', mt: (theme) => theme.spacing(0.5) }}>
          <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.75) }}>
            Real Madrid@
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.75) }}>
            1.5
          </Typography>
        </HStack>
      </VStack>
    </Grow>
  )
}

const BetSlip = () => {
  const [value, setValue] = React.useState(true);

  const handleChange = (newValue: boolean) => {
    setValue(newValue);
  };

  return (
    <BoxBorder>
      <VStack sx={{ alignItems: 'stretch' }}>
        <HStack
          sx={{
            py: 1,
            px: 2,
            justifyContent: 'space-between',
            bgcolor: (theme) => theme.palette.secondary.dark
          }}
        >
          <Typography>
            Bet Slip
          </Typography>
          <IconButton
            sx={{
              bgcolor: (theme) => theme.palette.error.light,
              padding: (theme) => theme.spacing(0.25),
              borderRadius: 0,
              [`&:hover`]: { bgcolor: (theme) => theme.palette.error.dark }
            }}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        </HStack>
        <HStack
          sx={{
            pt: 0.25,
            position: 'relative',
            justifyContent: 'space-between',
            height: (theme) => theme.spacing(5),
            bgcolor: (theme) => theme.palette.background.default
          }}
        >
          <Button
            sx={{
              width: '50%',
              borderRadius: 0,
              left: 0,
              zIndex: 1,
              position: 'absolute',
              bgcolor: value ? (theme) => theme.palette.background.default : (theme) => theme.palette.background.paper,
              color: value ? (theme) => theme.palette.error.main : (theme) => theme.palette.secondary.light,
              [`&:hover`]: {
                bgcolor: value ? (theme) => theme.palette.background.default : (theme) => theme.palette.background.paper,
                color: value ? (theme) => theme.palette.error.main : '#ffffff',
                width: value ? '50%' : 'calc(50% +  10px)',
                transition: 'width 0.5s',
                zIndex: 2,
              }
            }}
            onClick={() => handleChange(true)}
          >
            Single
          </Button>
          <Button
            sx={{
              right: 0,
              width: '50%',
              zIndex: 1,
              borderRadius: 0,
              position: 'absolute',
              bgcolor: !value ? (theme) => theme.palette.background.default : (theme) => theme.palette.background.paper,
              color: !value ? (theme) => theme.palette.error.main : (theme) => theme.palette.secondary.light,
              [`&:hover`]: {
                bgcolor: !value ? (theme) => theme.palette.background.default : (theme) => theme.palette.background.paper,
                color: !value ? (theme) => theme.palette.error.main : '#ffffff',
                width: !value ? '50%' : 'calc(50% +  10px)',
                transition: 'width 0.5s',
                zIndex: 2,
              }
            }}
            onClick={() => handleChange(false)}
          >
            Mix
          </Button>
        </HStack>
        {
          value ?
            (
              <>
                {
                  [1, 2].map((idx: number) => (
                    <SingleSlip key={idx} idx={idx} />
                  ))
                }
              </>
            ) :
            (
              <>
                {
                  [1, 2].map((idx: number) => (
                    <MixSlip key={idx} idx={idx} />
                  ))
                }
              </>
            )
        }
        {
          !value ? (
            <VStack sx={{ padding: 2, alignItems: 'stretch', borderWidth: '1px', borderStyle: 'none none solid none', borderColor: (theme) => theme.palette.secondary.light, bgcolor: (theme) => theme.palette.background.default }}>
              <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
                <Typography sx={{ fontWeight: 700, mr: 0.5, fontSize: (theme) => theme.spacing(1.75) }}>
                  Odds
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.75), color: (theme) => theme.palette.success.main }}>
                  @30.6
                </Typography>
              </HStack>
              <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
                <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.secondary.light }}>
                  Min :
                </Typography>
                <Typography sx={{ fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.success.main }}>
                  100
                </Typography>
              </HStack>
              <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(0.5) }}>
                <Typography sx={{ fontWeight: 700, fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.secondary.light }}>
                  Max :
                </Typography>
                <Typography sx={{ fontSize: (theme) => theme.spacing(1.5), color: (theme) => theme.palette.success.main }}>
                  1200
                </Typography>
              </HStack>
              <HStack sx={{ justifyContent: 'flex-start', mt: (theme) => theme.spacing(0.5) }}>
                <Typography sx={{ fontWeight: 700, mr: 0.5, fontSize: (theme) => theme.spacing(1.75) }}>
                  Win :
                </Typography>
                <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
                  4000
                </Typography>
              </HStack>
              <HStack sx={{ justifyContent: 'space-between', mt: (theme) => theme.spacing(1) }}>
                <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
                  Stack :
                </Typography>
                <OutlinedInput
                  // value={values.user}
                  // placeholder="Stake Amount"
                  // onChange={handleChange('user')}
                  // type='number'
                  sx={{
                    [`fieldset`]: {
                      display: 'none'
                    },
                    [`input`]: {
                      py: 0.5,
                      px: 1.5,
                      width: '100%'
                    },
                    width: '60%',
                    border: '1px solid gray',
                    borderRadius: 0,
                    bgcolor: '#21242ac9',
                    fontSize: (theme) => theme.spacing(1.75)
                  }}
                />
              </HStack>
            </VStack>
          ) : null
        }
        <HStack sx={{ bgcolor: (theme) => theme.palette.background.paper, p: 1, }}>
          <Button variant='contained' color='error' sx={{ minWidth: (theme) => theme.spacing(20), borderRadius: 0, p: 1 }}>
            <DoneOutlineIcon sx={{ mr: 1 }} fontSize='small' />
            <Typography>
              Place Bet
            </Typography>
          </Button>
        </HStack>
      </VStack>
    </BoxBorder >
  )
}

export default BetSlip;