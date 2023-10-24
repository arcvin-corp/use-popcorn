import { ReactNode } from "react";
import { TempMovieData, TempWatchData } from "../types";
import MovieInfo from "./movieInfo";
import { MovieIcons } from "../config";

export default function Movie({ movie }: { movie: TempMovieData | TempWatchData }) {
  let content: ReactNode;

  if ("imdbRating" in movie) {
    content = (
      <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <MovieInfo infoIcon={MovieIcons.imdbRating} infoText={movie.imdbRating}></MovieInfo>
          <MovieInfo infoIcon={MovieIcons.userRating} infoText={movie.userRating}></MovieInfo>
          <MovieInfo infoIcon={MovieIcons.runtime} infoText={movie.runtime}></MovieInfo>
        </div>
      </li>
    );
  } else {
    content = (
      <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <MovieInfo infoIcon={"🗓"} infoText={movie.Year}></MovieInfo>
        </div>
      </li>
    );
  }
  return content;
}
