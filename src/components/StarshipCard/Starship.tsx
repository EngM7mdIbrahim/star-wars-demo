import { Card, Image, MediaQuery, Overlay, Text } from '@mantine/core';
import { useStyles } from './Starship.styles';
import getBackgroundColorRGB from 'utils/getBackgroundColorRGB';

export function StarshipCard({ src, title }: { src: string; title: string }) {
  const { classes, theme } = useStyles();
  const backgroundColor = getBackgroundColorRGB(theme.colorScheme);
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <MediaQuery smallerThan={'sm'} styles={{display: 'none'}}>
        <Image src={src} height='200px' />
      </MediaQuery>
      <MediaQuery largerThan={'sm'} styles={{display: 'none'}}>
        <Image src={src} height='300px' />
      </MediaQuery>
      <Overlay
        className={classes.overlay}
        gradient={`linear-gradient(0deg, ${backgroundColor} 0%, ${backgroundColor} 20%,rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 85%,${backgroundColor} 95%, ${backgroundColor} 100%)`}
        opacity={1}
      >
        <Text className={classes.titleText}>{title}</Text>
      </Overlay>
    </Card>
  );
}
