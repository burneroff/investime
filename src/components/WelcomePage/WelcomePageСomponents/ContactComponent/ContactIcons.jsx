import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIconsStyle.module.css';

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <Box className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={16}  /> {/* Устанавливаем размер 16 для иконки */}
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </Box>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@mantine.dev', icon: IconAt },
  { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
  { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

export default function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack h={300}>{items}</Stack>;
}