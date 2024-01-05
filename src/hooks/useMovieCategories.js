import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "./../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieCategories = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    !popularMovies && getMovies("popular");
    !topRatedMovies && getMovies("top_rated");
    !upcomingMovies && getMovies("upcoming");
  }, []);

  const getMovies = async (category) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        category +
        "?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    if (category === "popular") {
      dispatch(addPopularMovies(json?.results));
    } else if (category === "top_rated") {
      dispatch(addTopRatedMovies(json?.results));
    } else if (category === "upcoming") {
      dispatch(addUpcomingMovies(json?.results));
    }
  };
};

export default useMovieCategories;
