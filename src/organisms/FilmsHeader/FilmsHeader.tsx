import { Grid, Image, Overlay, Text } from '@mantine/core';
import { FilmCard } from '@src/core';
import { IconShip, IconUsers, IconWorld, IconBug } from '@tabler/icons';
import { FilmData } from 'types/Films';
import getFileName from 'utils/getFileName';
import Link from 'next/link';
import { useStyles } from './FilmsHeader.styles';
import { Toolbar } from '@src/components/Toolbar/Toolbar';
import { SWCarousel } from '@src/components/SWCarousel/SWCarousel';
import getBackgroundColorRGB from 'utils/getBackgroundColorRGB';
export function FilmsHeader() {
  const { classes, theme } = useStyles();
  const backgroundColor = getBackgroundColorRGB(theme.colorScheme);
  return (
    <div className={classes.container}>
      <SWCarousel />
      <Overlay
        className={classes.overlay}
        gradient={`linear-gradient(0deg, ${backgroundColor} 0%, ${backgroundColor} 20%,rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 85%,${backgroundColor} 95%, ${backgroundColor} 100%)`}
        opacity={1}
      >
        <Toolbar />
        <div className={classes.welcomeTextContainer}>
          <Text className={classes.welcomeText}>WELCOME TO </Text>
          <Image height={250} fit="contain" src={`/images/star-${theme.colorScheme}.png`} />
        </div>
      </Overlay>
    </div>
  );
}
