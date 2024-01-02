import backgroundImage from "./../assets/background-image.jpg";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <img src={backgroundImage} alt="" />

      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
