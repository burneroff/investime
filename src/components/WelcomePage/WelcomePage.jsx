import '@mantine/core/styles.css';
import { Container, Grid, Paper } from '@mantine/core';
import HeaderWelcome from './WelcomePageСomponents/Header/HeaderWelcome';
import CardsCarousel from './WelcomePageСomponents/CardCarousel/CardCarousel';
import Hero from './WelcomePageСomponents/HeroComponent/Hero';
import Stats from './WelcomePageСomponents/StatsComponent/Stats';
import FooterWelcome from './WelcomePageСomponents/Footer/FooterWelcome';
import ContactUs from './WelcomePageСomponents/ContactComponent/ContactUs';

export default function WelcomePage() {
    const dataEvent = [
        {
          image:
            'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
          title: 'Best forests to visit in North America',
          category: 'nature',
          type: 'event',
        },
        {
          image:
            'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
          title: 'Hawaii beaches review: better than you think',
          category: 'beach',
          type: 'event',
        },
        {
          image:
            'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=400&q=80',
          title: 'Mountains at night: 12 best locations to enjoy the view',
          category: 'nature',
          type: 'event',
        },
        {
          image:
            'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=400&q=80',
          title: 'Aurora in Norway: when to visit for best experience',
          category: 'nature',
          type: 'event',
        },
        {
          image:
            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=400&q=80',
          title: 'Best places to visit this winter',
          category: 'tourism',
          type: 'event',
        },
        {
          image:
            'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=400&q=80',
          title: 'Active volcanos reviews: travel at your own risk',
          category: 'nature',
          type: 'event',
        },
      ];
      
      const dataAttraction = [
        {
          image:
            'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
          title: 'Best forests to visit in North America',
          category: 'nature',
          type: 'attraction',
        },
        {
          image:
            'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
          title: 'Hawaii beaches review: better than you think',
          category: 'beach',
          type: 'attraction',
        },
        {
          image:
            'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=400&q=80',
          title: 'Mountains at night: 12 best locations to enjoy the view',
          category: 'nature',
          type: 'attraction',
        },
        {
          image:
            'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=400&q=80',
          title: 'Aurora in Norway: when to visit for best experience',
          category: 'nature',
          type: 'attraction',
        },
        {
          image:
            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=400&q=80',
          title: 'Best places to visit this winter',
          category: 'tourism',
          type: 'attraction',
        },
        {
          image:
            'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=400&q=80',
          title: 'Active volcanos reviews: travel at your own risk',
          category: 'nature',
          type: 'attraction',
        },
      ];
         
  return (
    <div>
    <HeaderWelcome />
    <Container>
      <Hero />
      <Grid gutter="lg">
        <Grid.Col span={12}>
          <Paper padding="lg">
            <CardsCarousel data={dataEvent} />
          </Paper>
        </Grid.Col>
        <Grid.Col span={12}>
          <Stats />
        </Grid.Col>
        <Grid.Col span={12}>
          <Paper padding="lg">
            <CardsCarousel data={dataAttraction} />
          </Paper>
        </Grid.Col>
        <Grid.Col span={12}>
          <Paper padding="lg">
            <ContactUs data={dataAttraction} />
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
    <FooterWelcome />
    </div>
  );
}
