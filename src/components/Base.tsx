import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const BoxBorder = styled(Box)(({ theme }) => ({
  // borderWidth: theme.spacing(0.4),
  borderStyle: 'solid',
  borderColor: theme.palette.secondary.main
}))

export const HStack = styled(Stack)(({theme}) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const VStack = styled(Stack)(({theme}) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const LayoutWrap = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 68px - 48px)',
  padding: theme.spacing(4, 0),
  backgroundImage: `url(${require('../assets/img/background/1.png')})`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}))