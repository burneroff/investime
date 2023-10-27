import { Text, Card, RingProgress, Group, useMantineTheme } from '@mantine/core';
import classes from './AchiveStatistic.module.css';

const stats = [
  { value: 26, label: 'Осталось' },
  { value: 2, label: 'В процессе' },
];

export default function AchiveStatistic() {
  const theme = useMantineTheme();
  const completed = 4;
  const total = 32;
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" m={20} mt={30} className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label} >
            Достижения
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
              {completed}
            </Text>
            <Text fz="xs" c="dimmed">
              Сделаны
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress 
            roundCaps
            thickness={6}
            size={150}
            sections={[{ value: (completed / total) * 100, color: "rgb(79, 181, 69)" }]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Completed
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}
