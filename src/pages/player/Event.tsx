import { BoxBorder } from 'components/Base';
import Grid from '@mui/material/Grid';
import { SportHead, SportEvent } from '../../components/Part';

const Match = () => {
    return (
        <Grid container justifyContent='space-between'>
            <Grid item md={8.7} sm={8.7}>
                <BoxBorder sx={{ mt: 2 }}>
                    <SportHead {...{ sportId: 1, live: true }} />
                    <SportEvent />
                </BoxBorder>
            </Grid>
        </Grid>
    )
};

export default Match;
