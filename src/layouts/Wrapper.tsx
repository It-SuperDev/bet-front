import Container from '@mui/material/Container';
import { LayoutWrap } from '../components/Base';
import { BodyHead } from '../components/Part';
import { Outlet } from 'react-router-dom';

const Wrapper = () => (
    <LayoutWrap>
        <Container maxWidth='lg' sx={{ px: '0 !important' }}>
            <BodyHead />
            <Outlet />
        </Container>
    </LayoutWrap>
);

export default Wrapper;
