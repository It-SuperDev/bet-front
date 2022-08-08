import { BoxBorder } from 'components/Base';
import Grid from '@mui/material/Grid';
import BetSlip from 'components/Betslip';
import { SportHead, SportEvent } from '../../components/Part';

const Match = () => {
    return (
        <Grid container justifyContent='space-between' sx={{ mt: 2 }}>
            <Grid item sm={8.7}>
                <BoxBorder >
                    <SportHead {...{ sportId: 1, live: true }} />
                    <SportEvent />
                </BoxBorder>
            </Grid>
            <Grid item sm={3}>
                <BetSlip />
            </Grid>
        </Grid>
    )
};

export default Match;
