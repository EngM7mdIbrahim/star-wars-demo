import { GetServerSideProps } from 'next';
import { DehydartedPageProps } from 'types/DehydartedPageProps';
import * as api from 'api';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import REACT_QUERY_KEYS from 'constants/REACT_QUERY_KEYS';
import { FilmsData } from 'types/Films';
import { FilmCards } from '@src/organisms/FilmsCards/FilmsCards';
import { useStyles } from 'page.styles';
import { Toolbar } from '@src/components/Toolbar/Toolbar';
import { FilmsHeader } from '@src/organisms/FilmsHeader/FilmsHeader';

export default function HomePage() {
  const { data, error, isLoading } = useQuery<FilmsData>(
    [REACT_QUERY_KEYS.FILMS],
    api.getStarWarsFilms
  );
  const { classes } = useStyles();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error Fetching the Data, {JSON.stringify(error)}</div>;
  }
  const films = data?.results;
  return (
    <>
    <FilmsHeader/>
      <div className={classes.page}>
        <FilmCards films={films!} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<DehydartedPageProps> = async () => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery<FilmsData>([REACT_QUERY_KEYS.FILMS], api.getStarWarsFilms);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
