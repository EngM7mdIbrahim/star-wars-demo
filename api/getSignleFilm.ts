import axios from 'axios';
import { FilmData } from 'types/Films';

export const getSignleFilm = async (id: string): Promise<FilmData> => {
  return (await axios.get(`https://swapi.dev/api/films/${id}/`)).data as FilmData;
};
