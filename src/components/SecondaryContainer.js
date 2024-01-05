import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useMovieCategories from "./../hooks/useMovieCategories";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  useMovieCategories();

  return (
    <div className=" md:mt-[-20vw] px-6 relative z-10 pb-6">
      {nowPlayingMovies && (
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      )}
      {popularMovies && <MovieList title={"Popular"} movies={popularMovies} />}
      {topRatedMovies && (
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
      )}
      {upcomingMovies && (
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
      )}
    </div>
  );
};

export default SecondaryContainer;
