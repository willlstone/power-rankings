import { useLocation, Link } from 'react-router-dom';
import { Image, Title, Grid, Text } from '@mantine/core';
import incompletePass from '../../images/Incomplete_Pass.gif';
import classes from './NotFound.module.css';

export default function NotFound() {
    const location = useLocation();
    const shortPath = location.pathname.replace('/giraffe-squad-fantasy-football', '');

    return (
        <Grid>
            <Grid.Col className={classes.messageContainer} span={{ md: 12, lg: 12 }}>
                <Title className={classes.header}>
                    Whoops, the page{' '}
                    <span className={classes.path}>
                        {shortPath}{' '}
                    </span>
                    does not exist!
                </Title>
                <Image
                  src={incompletePass}
                  alt="ref making incomplete pass signal"
                  h={400}
                  w={400}
                />
                <Link to="/giraffe-squad-fantasy-football">
                    <Text className={classes.link}>
                        Back to the huddle &gt;&gt;
                    </Text>
                </Link>
            </Grid.Col>
        </Grid>
    );
}
