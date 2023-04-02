import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import { useStyles } from './FilmCard.styles';
import { BadgeCardProps } from './FilmCard.interface';

export function FilmCard({ image, title, description, country, badges }: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      className={classes.badgeText}
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text className={classes.titleText}>{title}</Text>
          <Badge size="sm">{country}</Badge>
        </Group>
        <Text mt="xs" lineClamp={3}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
      </Group>
    </Card>
  );
}
