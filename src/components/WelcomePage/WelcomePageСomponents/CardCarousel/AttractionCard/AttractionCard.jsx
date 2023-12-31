import { Paper, Text, Title, Button} from '@mantine/core';
import classes from '../CardCarouselStyle.module.css';
import { Link } from 'react-router-dom';

export default function AttractionCard({ image, title, category }) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Link to={"/home"}><Button variant="white" color="dark">
          Подробнее
        </Button> </Link>
      </Paper>
    );
  }
