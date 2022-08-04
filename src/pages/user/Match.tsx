import { BoxBorder } from 'components/Base';
import Grid from '@mui/material/Grid';
import { SportHead } from '../../components/Part';

const Match = () => {
    return (
        <Grid container justifyContent='space-between'>
            <Grid item md={8.5} sm={8.7}>
                <BoxBorder sx={{ mt: 2 }}>
                    <SportHead />
                </BoxBorder>;
            </Grid>
        </Grid>
    )
};

export default Match;
