import { Image, Overlay, MediaQuery } from '@mantine/core';
import { useStyles } from './BackgroundShadedImage.styles';
import getBackgroundColorRGB from 'utils/getBackgroundColorRGB';
export function BackgroundShadedImage({ src }: { src: string }) {
  const { classes, theme } = useStyles();
  const backgroundColor = getBackgroundColorRGB(theme.colorScheme);
  return (
    <div className={classes.container}>
      <Image height="100vh" width="100%" src={src} />
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Overlay
          className={classes.overlay}
          gradient={`linear-gradient(90deg, rgba(0, 0, 0, 0)0%, ${backgroundColor} 60%, ${backgroundColor} 100%)`}
          opacity={1}
        />
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Overlay
          className={classes.overlay}
          color={theme.colorScheme === 'dark' ? 'black' : 'white'}
          opacity={1}
        />
      </MediaQuery>
    </div>
  );
}
