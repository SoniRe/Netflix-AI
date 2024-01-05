import { useState } from "react";
import { useSelector } from "react-redux";
import SelectedVideo from "./SelectedVideo";

const VideoTitle = ({ movieId, title, overview }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="w-screen aspect-video absolute top-0 left-0 pt-52 px-14 bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white w-[50%]">{title}</h1>
      <p className="pt-8 text-base w-[40%] leading-5 text-white">{overview}</p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => {
            setIsSelected(true);
          }}
          className="hover:bg-opacity-85 bg-white px-8 py-1 rounded flex justify-center items-center gap-2 text-base "
        >
          <i className="ri-play-fill text-3xl"></i>Play
        </button>
        <button className="hover:bg-opacity-85 bg-neutral-600 text-white  px-8 py-1 rounded flex justify-center items-center gap-2 text-base">
          <i className="ri-information-line text-3xl"></i>More Info
        </button>
      </div>

      {isSelected && (
        <SelectedVideo movieId={movieId} setIsSelected={setIsSelected} />
      )}
    </div>
  );
};

export default VideoTitle;
