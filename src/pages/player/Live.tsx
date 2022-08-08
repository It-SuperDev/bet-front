import { BoxBorder } from 'components/Base';
import Grid from '@mui/material/Grid';
import BetSlip from 'components/Betslip';
import { SportHead, SportLeague, LiveList } from '../../components/Part';

const Match = () => {
    return (
        <Grid container justifyContent='space-between' sx={{ mt: 2 }}>
            <Grid item md={8.7} sm={8.7}>
                <LiveList />
                <BoxBorder>
                    <SportHead {...{ sportId: 1, favourite: true }} />
                    <SportLeague />
                </BoxBorder>
            </Grid>
            <Grid item sm={3}>
                <BetSlip />
            </Grid>
        </Grid>
    )
};

export default Match;