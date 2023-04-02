import { Card, Image, MediaQuery, Overlay, Text } from '@mantine/core';
import { useStyles } from './Starship.styles';
import getBackgroundColorRGB from 'utils/getBackgroundColorRGB';

export function StarshipCard({ src, title }: { src: string; title: string }) {
  const { classes, theme } = useStyles();
  const backgroundColor = getBackgroundColorRGB(theme.colorScheme);
  
  return (
    <Card withBorder radius="md" p={'none'} className={classes.card}>
      <MediaQuery smallerThan={'sm'} styles={{display: 'none'}}>
        <Image width="100%" src={src} height='200px' />
      </MediaQuery>
      <MediaQuery largerThan={'sm'} styles={{display: 'none'}}>
        <Image width="100%" src={src} height='300px' />
      </MediaQuery>
      <Overlay
        className={classes.overlay}
        gradient={`linear-gradient(0deg, ${backgroundColor} 0%, ${backgroundColor} 15%,rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`}
        opacity={1}
      >
        <Text className={classes.titleText}>{title}</Text>
      </Overlay>
    </Card>
  );
}
