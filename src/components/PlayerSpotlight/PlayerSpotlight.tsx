import { Image, Text, Grid } from '@mantine/core';
import classes from './PlayerSpotlight.module.css';
import Player from './player_only.webp';
import BackgroundText from './text_only.webp';

export default function PlayerSpotlight() {
  return (
    <>
      <div className={classes.spotlightContainer}>
        <Image src={Player} className={classes.spotlightImage} />
        {/* <h1 className={classes.spotlightText}>Player of the week</h1> */}
      </div>
      <div className={classes.playerContainer}>
        <Grid gutter={0}>
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <Text className={classes.playerName}>Dak Prescott</Text>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 6 }} className={classes.flexColumn}>
            <Text className={classes.playerPoints}>31 points</Text>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
