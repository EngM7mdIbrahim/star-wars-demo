import { Grid } from '@mantine/core';
import { FilmCard } from '@src/core';
import { IconShip, IconUsers, IconWorld, IconBug } from '@tabler/icons';
import { FilmData } from 'types/Films';
import getFileName from 'utils/getFileName';
import { useStyles } from './FilmsCards.styles';
import Link from 'next/link';
import getFilmID from 'utils/getIDFromURL';
export function FilmCards({ films }: { films: FilmData[] }) {
  const { classes, theme } = useStyles();
  return (
    <Grid gutter={'lg'} className={classes.container}>
      {films?.map((film) => {
        return (
          <Grid.Col key={film.title} md={4}>
            <Link href={`/film/${getFilmID(film.url)}`}>
              <a className={classes.a}>
              <FilmCard
                image={`/images/films/${getFileName(film.title)}.jpg`}
                title={film.title}
                country={`Episode ${film.episode_id}`}
                description={film.opening_crawl}
                badges={[
                  {
                    emoji: (
                      <IconShip
                        fill={theme.primaryColor}
                        size={18}
                        color={theme.colorScheme === 'dark' ? theme.white : theme.black}
                      />
                    ),
                    label: `${film.starships.length} Ships`,
                  },
                  {
                    emoji: (
                      <IconUsers
                        fill={theme.primaryColor}
                        size={18}
                        
                        color={theme.colorScheme === 'dark' ? theme.white : theme.black}
                      />
                    ),
                    label: `${film.characters.length} Characters`,
                  },
                  {
                    emoji: (
                      <IconWorld
                        fill={theme.primaryColor}
                        size={18}
                        
                        color={theme.colorScheme === 'dark' ? theme.white : theme.black}
                      />
                    ),
                    label: `${film.planets.length} Planets`,
                  },
                  {
                    emoji: (
                      <IconBug
                        fill={theme.primaryColor}
                        size={18}
                        
                        color={theme.colorScheme === 'dark' ? theme.white : theme.black}
                      />
                    ),
                    label: `${film.species.length} Species`,
                  },
                ]}
              />
              </a>
            </Link>
          </Grid.Col>
        );
      })}
      <div></div>
    </Grid>
  );
}
