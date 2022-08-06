import { BoxBorder } from 'components/Base';
import { SportHead, SportBody } from '../../components/Part';

const Home = () => {
    return (
        <BoxBorder sx={{ mt: 2 }}>
            <SportHead {...{ sportId: 1, dateList: true, today: true, qutright: 19, favourite: true }} />
            <SportBody />
        </BoxBorder>);
};

export default Home;