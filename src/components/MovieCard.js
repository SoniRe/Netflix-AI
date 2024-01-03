import { IMG_CDN } from "./../utils/constants";
import backupImage from "./../assets/backupImage.jpg";

const MovieCard = ({ posterPath }) => {
  if (posterPath === null) return;

  return (
    <div className="hover:scale-110 transition cursor-pointer flex-shrink-0 mr-5">
      <img
        className="h-[19vw] w-[12vw] mb-1 rounded object-cover object-center"
        src={IMG_CDN + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
