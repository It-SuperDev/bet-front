import { BoxBorder } from 'components/Base';
import { SportHead, SportBody } from '../../components/Part';

const Home = () => {
    return (
        <BoxBorder sx={{ mt: 2 }}>
            <SportHead />
            <SportBody />
        </BoxBorder>);
};

export default Home;
