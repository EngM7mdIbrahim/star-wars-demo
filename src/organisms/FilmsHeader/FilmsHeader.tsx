import { Grid, Image, Overlay, Text } from '@mantine/core';
import { FilmCard } from '@src/core';
import { IconShip, IconUsers, IconWorld, IconBug } from '@tabler/icons';
import { FilmData } from 'types/Films';
import getFileName from 'utils/getFileName';
import Link from 'next/link';
import { useStyles } from './FilmsHeader.styles';
import { Toolbar } from '@src/components/Toolbar/Toolbar';
import { SWCarousel } from '@src/components/SWCarousel/SWCarousel';
export function FilmsHeader() {
  const { classes, theme } = useStyles();
  const backgroundColor =
    theme.colorScheme === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
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
          <Image height={300} fit='contain' src={`/images/star-${theme.colorScheme}.png`}/>
        </div>
      </Overlay>
    </div>
  );
}
