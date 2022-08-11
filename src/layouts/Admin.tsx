import { Outlet } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { BoxBorder, LayoutWrap } from 'components/Base';
import { AdminManageList, ManageHead } from 'components/Part';

const AdminLayout = () => (
    <Stack>
        <Header />
        <LayoutWrap>
            <Container maxWidth='lg' sx={{ px: '0 !important' }}>
                <Stack>
                    <AdminManageList />
                </Stack>
                <BoxBorder >
                    <ManageHead title={'Users'} />
                    <Outlet />
                </BoxBorder>
            </Container>
        </LayoutWrap>
        <Footer />
    </Stack>
);

export default AdminLayout;
