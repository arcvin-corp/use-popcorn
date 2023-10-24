import { TempMovieData, TempWatchData } from "../types";
import Movie from "./movie";

export default function MoviesList({ movies }: { movies: TempMovieData[] | TempWatchData[] }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID}></Movie>
      ))}
    </ul>
  );
}
