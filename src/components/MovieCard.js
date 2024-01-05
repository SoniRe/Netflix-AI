import { useState } from "react";
import { IMG_CDN } from "./../utils/constants";
import SelectedVideo from "./SelectedVideo";

const MovieCard = ({ id, posterPath }) => {
  const [isSelected, setIsSelected] = useState(false);

  if (posterPath === null) return;

  return isSelected ? (
    <SelectedVideo movieId={id} setIsSelected={setIsSelected} />
  ) : (
    <div
      onClick={() => setIsSelected(true)}
      className="hover:scale-110 transition cursor-pointer flex-shrink-0 mr-5"
    >
      <img
        className="h-[19vw] w-[12vw] mb-1 rounded object-cover object-center"
        src={IMG_CDN + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
