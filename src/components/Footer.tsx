import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';

import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: (theme) => theme.palette.background.paper, py: 1 }}>
            <Container maxWidth="lg" sx={{ px: '0 !important' }} >
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
                                    alignItems: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={require('../assets/img/logo/logo.png')}
                                    alt='logo'
                                    sx={{ maxHeight: (theme) => theme.spacing(7) }}
                                />
                                <Typography component="p" sx={{ color: 'white' }}>
                                    Bet-Front
                                </Typography>
                            </Typography>
                        ) : null
                    }
                    <Box sx={{ margin: 'auto' }}>
                        <Stack direction="row" alignItems='center' gap={1}>
                            <CopyrightIcon />
                            2022 Bet-Front.com | All Rights Reserved.
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Footer;
