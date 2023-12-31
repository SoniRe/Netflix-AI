import { IMG_CDN } from "./../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="hover:scale-110 transition cursor-pointer">
      <img
        className=" w-[12vw] mb-1 rounded"
        src={IMG_CDN + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
