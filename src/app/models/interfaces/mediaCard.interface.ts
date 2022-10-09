import { IGenre } from './genre.interface';

export interface IMediaCard {
  id: number;
  poster_path: string;
  title: string;
  releasYear: string;
  media_type: string;
  /* genres: IGenre[]; */
  genre_ids: number[];
}
