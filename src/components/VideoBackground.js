import { useEffect } from "react";
import { API_OPTIONS } from "./../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "./../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

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

  return (
    <div className="absolute z-[-1] w-full h-full top-0 left-0 bg-slate-">
      <iframe
        className="w-full h-full"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
