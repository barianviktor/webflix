import { IMediaCard } from './mediaCard.interface';

export interface ISearchResult {
  page: number;
  results: IMediaCard[];
  total_pages: number;
  total_results: number;
}
