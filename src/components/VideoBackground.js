import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const trailerSource =
    "https://www.youtube.com/embed/" +
    trailerVideo?.key +
    "?si=Pt5yMXzA30xpzgfZ&amp;controls=0&autoplay=1&mute=1&loop=1";

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={trailerSource}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
