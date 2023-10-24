export interface TempMovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface TempWatchData extends TempMovieData {
  runtime: number;
  imdbRating: number;
  userRating: number;
}

export type MovieIconsType = {
  moviesCount: string;
  imdbRating: string;
  userRating: string;
  runtime: string;
  Year: string;
};
