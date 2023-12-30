import { IMG_CDN } from "./../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" hover:scale-110 transition">
      <img
        className="w-44 mr-4 mb-1"
        src={IMG_CDN + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
