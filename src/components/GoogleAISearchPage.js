import backgroundImage from "./../assets/background-image.jpg";
import GoogleAISearchBar from "./GoogleAISearchBar";
import GoogleAIMovieSuggestion from "./GoogleAIMovieSuggestion";

const GoogleAISearchPage = () => {
  return (
    <div>
      <img src={backgroundImage} alt="" />

      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <GoogleAISearchBar />
        <GoogleAIMovieSuggestion />
      </div>
    </div>
  );
};

export default GoogleAISearchPage;
