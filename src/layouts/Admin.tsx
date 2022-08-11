import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from '@mui/material/Container';
import { LayoutWrap } from '../components/Base';
import { Outlet } from 'react-router-dom';

import Stack from '@mui/material/Stack';

const AdminLayout = () => (
    <Stack>
        <Header />
        <LayoutWrap>
            <Container maxWidth='lg' sx={{ px: '0 !important' }}>
                <Outlet />
            </Container>
        </LayoutWrap>
        <Footer />
    </Stack>
);

export default AdminLayout;
