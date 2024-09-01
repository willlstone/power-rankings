import { BackgroundImage, Title, Container, Image } from '@mantine/core';
import Jersey from '../../images/Giraffe_Jersey.png';
import Helmet from '../../images/Giraffe_Helmet.webp';
import PattiHelmet from '../../images/PattiBot_Helmet.webp';
import Crest from '../../images/fantasy_league.webp';
import GameOfWeek from '../../images/game_of_week.webp';
import classes from './MatchupOfTheWeek.module.css';

export default function MatchupOfTheWeek() {
  return (
    <Container className={classes.Container}>
      <Title className={classes.gameOfWeekTitle}>Game of the Week</Title>
      <div className={classes.Card}>
        <div className={classes.centerContent}>
          <Image src={GameOfWeek} className={classes.matchupTitle} />
          <Image src={Crest} alt="crest" className={classes.leagueCrest} />
        </div>
        <div className={[classes.matchupTeam, classes.leftTeam].join(' ')}>
          <h3 className={classes.teamName}>DakStreet Boys</h3>
          <Image src={Helmet} alt="helmet" className={classes.matchupHelmet} />
        </div>
        <div className={[classes.matchupTeam, classes.rightTeam].join(' ')}>
          <h3 className={classes.teamName}>PattiBot</h3>
          <Image src={PattiHelmet} alt="helmet" className={classes.matchupHelmetReverse} />
        </div>
      </div>
    </Container>
  );
}
