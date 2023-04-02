import { Grid } from '@mantine/core';
import { useStyles } from './Starships.styles';
import Link from 'next/link';
import { StarshipCard } from '@src/components/StarshipCard/Starship';
export function StarhipsCards({ ships, filmID }: { ships: {id: string, title: string, src: string}[], filmID: string }) {
  const { classes, theme } = useStyles();
  return (
    <Grid className={classes.container}>
      {ships.map((ship) => {
        return (
          <Grid.Col key={ship.id} md={4}>
            <Link href={`/film/${filmID}/spaceship/${ship.id}}`}>
              <a className={classes.a}>
              <StarshipCard
                src={ship.src}
                title={ship.title}
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
