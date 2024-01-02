import { useSelector } from "react-redux";
import lang from "./../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <form className="w-screen flex justify-center items-center">
        <input
          className="p-4 m-4 rounded w-1/2 focus:outline-purple-500 "
          type="text"
          placeholder={lang[langKey].placeholder}
        />
        <button className="text-white py-4 px-8 bg-red-600 rounded">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
