import { BoxBorder } from 'components/Base';
import { ManageHead, SportBody } from '../../components/Part';

const Home = () => {
    return (
        <BoxBorder sx={{ mt: 2 }}>
            <ManageHead />
            <SportBody />
        </BoxBorder>);
};

export default Home;