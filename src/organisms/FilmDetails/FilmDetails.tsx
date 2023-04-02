import { FilmData } from 'types/Films';
import { Text } from '@mantine/core';
import { useStyles } from './FilmDetails.styles';
import timeAgo from 'utils/timeAgo';
import { StarhipsCards } from '../StarshipsCards/StarshipsCards';
import getIDFromURL from 'utils/getIDFromURL';
import { STARSHIPS } from 'utils/starships';
import getFileName from 'utils/getFileName';

export function FilmDetails({ film, filmID }: { film: FilmData; filmID: string }) {
  const { classes, theme } = useStyles();
  const ships = film.starships.map((shipLink) => ({
    id: getIDFromURL(shipLink),
    title: STARSHIPS[getIDFromURL(shipLink) as keyof typeof STARSHIPS],
    src: `/images/starships/${getFileName(
      STARSHIPS[getIDFromURL(shipLink) as keyof typeof STARSHIPS]
    )}.jpg`,
  }));
  return (
    <div className={classes.container}>
      <div className={classes.dummyContainer}></div>
      <div className={classes.detailsContainer}>
        <Text className={classes.titleText}>{film.title}</Text>
        <div className={classes.filmSubDetailsContainer}>
          <Text className={classes.detailsText}>Produced By {film.director}</Text>
          <Text className={classes.detailsText}>Released {timeAgo(film.created)}</Text>
        </div>
        <Text mt={'xl'} className={classes.descText}>
          {film.opening_crawl}
        </Text>
        <StarhipsCards filmID={filmID} ships={ships} />
      </div>
    </div>
  );
}
