const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12">
      <h1 className=" pt-44 text-8xl font-bold text-white">{title}</h1>
      <p className="pt-8 text-base w-[40%] leading-5 text-white">{overview}</p>
      <div className="mt-6 flex gap-4">
        <button className="bg-white px-8 py-1 rounded flex justify-center items-center gap-2 text-base ">
          <i className="ri-play-fill text-3xl"></i>PLay
        </button>
        <button className=" bg-neutral-600 text-white  px-8 py-1 rounded flex justify-center items-center gap-2 text-base">
          <i className="ri-information-line text-3xl"></i>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
