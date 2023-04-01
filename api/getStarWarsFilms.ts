import axios from 'axios';
import { FilmsData } from 'types/Films';

export const getStarWarsFilms = async (): Promise<FilmsData> => {
  return (await axios.get('https://swapi.dev/api/films/')).data as FilmsData;
};
