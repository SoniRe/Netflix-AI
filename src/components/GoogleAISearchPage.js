import backgroundImage from "./../assets/background-image.jpg";
import GoogleAISearchBar from "./GoogleAISearchBar";
import GoogleAIMovieSuggestion from "./GoogleAIMovieSuggestion";

const GoogleAISearchPage = () => {
  return (
    <div className="min-h-screen min-w-screen ">
      <div className="absolute h-full w-full top-0 object-cover z-10 bg-black opacity-50"></div>
      <img
        className="absolute h-full w-full top-0 object-cover"
        src={backgroundImage}
        alt=""
      />

      <div>
        <GoogleAISearchBar />
        <GoogleAIMovieSuggestion />
      </div>
    </div>
  );
};

export default GoogleAISearchPage;
