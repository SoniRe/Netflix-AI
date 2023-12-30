import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 pb-4 ">
      <h1 className="text-3xl py-6 font-semibold text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        <div className="flex flex-shrink-0">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
