import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import genAI from "../utils/geminiai";

const GoogleAISearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current?.value +
      ". Only give name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // Make an API call to Gemini Pro API and get movie Results
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = await response.text();

    console.log(response);

    console.log(searchText.current?.value);
    console.log(gptQuery);
    console.log(text);
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-screen flex justify-center items-center"
      >
        <input
          ref={searchText}
          className="p-4 m-4 rounded w-1/2 focus:outline-purple-500 "
          type="text"
          placeholder={lang[langKey].placeholder}
        />
        <button
          className="text-white py-4 px-8 bg-red-600 rounded"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GoogleAISearchBar;
