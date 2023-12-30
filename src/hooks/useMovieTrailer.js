import { useEffect } from "react";
import { API_OPTIONS } from "./../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "./../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer videos
  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData.length === 0 ? json?.results[0] : filterData[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
