import { MovieIcons } from "../config";
import { TempWatchData } from "../types";
import { average } from "../utils/commonFunctions";
import MovieInfo from "./movieInfo";

export default function Summary({ watched }: { watched: TempWatchData[] }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <MovieInfo infoIcon={MovieIcons.moviesCount} infoText={watched.length}></MovieInfo>
        <MovieInfo infoIcon={MovieIcons.imdbRating} infoText={avgImdbRating}></MovieInfo>
        <MovieInfo infoIcon={MovieIcons.userRating} infoText={avgUserRating}></MovieInfo>
        <MovieInfo infoIcon={MovieIcons.runtime} infoText={avgRuntime}></MovieInfo>
      </div>
    </div>
  );
}
