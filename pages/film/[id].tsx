import { GetServerSideProps } from 'next';
import { DehydartedPageProps } from 'types/DehydartedPageProps';
import * as api from 'api';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import REACT_QUERY_KEYS from 'constants/REACT_QUERY_KEYS';
import { FilmData, FilmsData } from 'types/Films';
import { FilmCards } from '@src/organisms/FilmsCards/FilmsCards';
import { useStyles } from 'page.styles';
import { FilmsHeader } from '@src/organisms/FilmsHeader/FilmsHeader';
import { useRouter } from 'next/router';
import { FilmCard } from '@src/core';
import { IconBug, IconShip, IconUsers, IconWorld } from '@tabler/icons';
import getFileName from 'utils/getFileName';
import { Toolbar } from '@src/components/Toolbar/Toolbar';
import getBackgroundColorRGB from 'utils/getBackgroundColorRGB';
import { BackgroundShadedImage } from '@src/organisms/BackgroundShadedImage/BackgroundShadedImage';
import { FilmDetails } from '@src/organisms/FilmDetails/FilmDetails';

export default function FilmPage() {
  const router = useRouter();
  const filmID = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
  const { data, error, isLoading } = useQuery<FilmData>(
    [REACT_QUERY_KEYS.FILMS, filmID],
    async (): Promise<FilmData> => {
      return await api.getSignleFilm(filmID!);
    }
  );
  const { classes, theme } = useStyles();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error Fetching the Data, {JSON.stringify(error)}</div>;
  }
  const film = data!;
  return (
    <div className={classes.page}>
      <BackgroundShadedImage src={'/images/films/' + getFileName(film.title) + '.jpg'} />
      <Toolbar />
      <FilmDetails film={film}/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<DehydartedPageProps> = async (ctx) => {
  const queryClient = new QueryClient();
  let filmID = Array.isArray(ctx.query.id) ? ctx.query.id[0] : ctx.query.id;
  try {
    await queryClient.fetchQuery<FilmData>(
      [REACT_QUERY_KEYS.FILMS, filmID],
      async (): Promise<FilmData> => {
        return await api.getSignleFilm(filmID!);
      }
    );
  } catch (e) {
    console.log('Cannot prefetch Data for the film: ', filmID);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
