import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { StyledBadge } from './Base';

const settings = ['Change Password', 'Transaction', 'Login History', 'Logout'];
const lang = ['en', 'de'];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElOdd, setAnchorElOdd] = React.useState<null | HTMLElement>(null);
  const [isEn, setIsEn] = React.useState<Boolean>(true);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenOddMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElOdd(event.currentTarget);
  };

  const handChangelang = () => {
    setIsEn(!isEn);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseOddMenu = () => {
    setAnchorElOdd(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundImage: 'unset' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {
            process.env.REACT_APP_LOGO ? (
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                <Box
                  component="img"
                  src={require('../assets/img/logo/logo.png')}
                  alt='logo'
                  sx={{ maxHeight: (theme) => theme.spacing(7) }}
                />
              </Typography>
            ) : null
          }

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              margin: 'auto'
            }}
          >
            <Box
              component="img"
              src={require('../assets/img/logo/logo.png')}
              alt='logo'
              sx={{ maxHeight: (theme) => theme.spacing(7) }}
            />
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                aria-controls="menu-appbar"
                onClick={handleOpenUserMenu}
                sx={{ py: 0, px: 2, bgcolor: '#ffffff36', borderRadius: 0, minWidth: (theme) => theme.spacing(14), display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: (theme) => theme.spacing(8) }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="User" src={require('assets/img/users/1.png')} />
                </StyledBadge>
                <Typography sx={{ color: 'inherit', ml: 1 }}>
                  XXX
                </Typography>
              </Button>
            </Tooltip>
            <Menu
              sx={{
                mt: (theme) => theme.spacing(6),
                [`& .MuiPopover-paper`]: {
                  borderRadius: 0
                }
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ fontSize: (theme) => theme.spacing(1.5) }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around' }}>
            <Stack direction="row" alignItems='center' gap={1}>
              <AccountBalanceWalletIcon color='disabled' />
              <Typography sx={{ color: (theme) => theme.palette.success.light }}>
                200
              </Typography>
            </Stack>
            <Stack direction="row" alignItems='center' gap={2}>
              <Box
                component="img"
                src={require(`../assets/img/flags/${isEn ? lang[0]: lang[1]}.png`)}
                alt='logo'
                sx={{ cursor: 'pointer', width: (theme) => theme.spacing(3), height: (theme) => theme.spacing(2) }}
              />
              <Box
                component="img"
                onClick={handChangelang}
                src={require(`../assets/img/flags/${!isEn ? lang[0]: lang[1]}.png`)}
                alt='logo'
                sx={{ cursor: 'pointer', transform: 'scale(0.99)', opacity: '0.7', width: (theme) => theme.spacing(3), height: (theme) => theme.spacing(2),
                [`&:hover`] : {
                  transform: 'scale(1.2)', opacity: 1, transition: 'transform 0.5s'
                } }}
              />
            </Stack>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="American | Decimal">
                <Button
                  aria-controls="menu-appbar"
                  onClick={handleOpenOddMenu}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    px: 1, minWidth: (theme) => theme.spacing(8),
                    [`&:hover`]: { bgcolor: '#ffffff36' }
                  }}
                >
                  <Typography sx={{ color: 'inherit' }}>
                    American
                  </Typography>
                </Button>
              </Tooltip>
              <Menu
                sx={{
                  mt: (theme) => theme.spacing(5),
                  [`& .MuiPopover-paper`]: {
                    borderRadius: 0,
                  },
                  [`& .MuiPopover-paper ul`]: {
                    minWidth: (theme) => theme.spacing(15)
                  }
                }}
                id="menu-appbar"
                anchorEl={anchorElOdd}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElOdd)}
                onClose={handleCloseOddMenu}
              >
                <MenuItem onClick={handleCloseOddMenu}>
                  <Typography textAlign="center" sx={{ fontSize: (theme) => theme.spacing(1.5) }}>American</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseOddMenu}>
                  <Typography textAlign="center" sx={{ fontSize: (theme) => theme.spacing(1.5) }}>Decimal</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Stack direction='row' alignItems='center'>
              <Typography sx={{ color: 'white' }}>
                01/08/2022/ 12:15
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Button sx={{ display: { md: 'flex', xs: 'none' } }}>
              <LogoutIcon sx={{ color: 'white' }} />
              <Typography sx={{ color: 'white' }}>
                Login
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
