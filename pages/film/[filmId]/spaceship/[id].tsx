import { GetServerSideProps } from 'next';
import { DehydartedPageProps } from 'types/DehydartedPageProps';
import * as api from 'api';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import REACT_QUERY_KEYS from 'constants/REACT_QUERY_KEYS';
import { FilmData, FilmsData } from 'types/Films';
import { useStyles } from 'page.styles';
import { useRouter } from 'next/router';
import getFileName from 'utils/getFileName';
import { Toolbar } from '@src/components/Toolbar/Toolbar';
import { BackgroundShadedImage } from '@src/organisms/BackgroundShadedImage/BackgroundShadedImage';
import { StarshipData } from 'types/StarshipData';
import { StarshipDetails } from '@src/organisms/StarshipDetails/StarshipDetails';

export default function ShipPage() {
  const router = useRouter();
  const starshipID = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
  const { data, error, isLoading } = useQuery<StarshipData>(
    [REACT_QUERY_KEYS.FILMS, starshipID],
    async (): Promise<StarshipData> => {
      return await api.getStarship(starshipID!);
    }
  );
  const { classes } = useStyles();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error Fetching the Data, {JSON.stringify(error)}</div>;
  }
  const starship = data!;
  const imgFile = '/images/starships/' + getFileName(starship.name) + '.jpg'
  return (
    <div className={classes.page}>
      <BackgroundShadedImage src={imgFile} />
      <Toolbar />
      <StarshipDetails shipImgSrc={imgFile} starship={starship} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<DehydartedPageProps> = async (ctx) => {
  const queryClient = new QueryClient();
  let starshipID = Array.isArray(ctx.query.id) ? ctx.query.id[0] : ctx.query.id;
  try {
    await queryClient.fetchQuery<StarshipData>(
      [REACT_QUERY_KEYS.FILMS, starshipID],
      async (): Promise<StarshipData> => {
        return await api.getStarship(starshipID!);
      }
    );
  } catch (e) {
    console.log('Cannot prefetch Data for the starhsip: ', starshipID);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
