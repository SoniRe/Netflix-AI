import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import genAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "./../utils/gptSlice";
import Shimmer from "./Shimmer";

const GoogleAISearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current?.value +
      ". Only give name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

    // Make an API call to Gemini Pro API and get movie Results
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(gptQuery);

    if (!result) {
      // TO-DO
      //  Error handling
      return;
    }

    const response = await result.response;
    const text = await response.text();

    const geminiMovies = text.split(",");

    // For each movie Search TMDB API
    const promiseArray = geminiMovies.map((movieName) =>
      searchMovieTMDB(movieName)
    );
    // promiseArray -> [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieNames: geminiMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="mt-[15vw] relative z-10">
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
