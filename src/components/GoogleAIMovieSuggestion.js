import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GoogleAIMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="mt-[5vw] px-6 relative z-10 pb-6">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GoogleAIMovieSuggestion;
