import { GetServerSideProps } from 'next';
import { DehydartedPageProps } from 'types/DehydartedPageProps';
import * as api from 'api';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import REACT_QUERY_KEYS from 'constants/REACT_QUERY_KEYS';
import { FilmData } from 'types/Films';
import { useStyles } from 'page.styles';
import { useRouter } from 'next/router';
import getFileName from 'utils/getFileName';
import { Toolbar } from '@src/components/Toolbar/Toolbar';
import { BackgroundShadedImage } from '@src/organisms/BackgroundShadedImage/BackgroundShadedImage';
import { FilmDetails } from '@src/organisms/FilmDetails/FilmDetails';

export default function FilmPage() {
  const router = useRouter();
  const filmID = Array.isArray(router.query.filmId) ? router.query.filmId[0] : router.query.filmId;
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
  const imgFile = '/images/films/' + getFileName(film.title) + '.jpg'
  return (
    <div className={classes.page}>
      <BackgroundShadedImage src={imgFile} />
      <Toolbar />
      <FilmDetails filmID={filmID!} film={film} filmImgSrc={imgFile}/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<DehydartedPageProps> = async (ctx) => {
  const queryClient = new QueryClient();
  let filmID = Array.isArray(ctx.query.filmId) ? ctx.query.filmId[0] : ctx.query.filmId;
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
