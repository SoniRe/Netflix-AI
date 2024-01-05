import headerLogo from "./../assets/netflix-header-logo.png";
import userIcon from "./../assets/user-icon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "./../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "./../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-40 w-screen top-0 px-12 bg-gradient-to-b from-black flex items-center flex-col md:flex-row justify-between">
      <img className="w-44 cursor-pointer" src={headerLogo} alt="" />

      {user && (
        <div className="flex item-center w-screen justify-center md:justify-end gap-4">
          {showGptSearch && (
            <select
              className="px-4 h-10 mt-2 rounded"
              onChange={handleChangeLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="p-2 m-2 bg-purple-700 text-white font-semibold rounded flex justify-center items-center gap-2"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? (
              "Home Page"
            ) : (
              <>
                <i className="ri-search-line"></i>Google AI Search
              </>
            )}
          </button>
          <img className="h-11" src={userIcon} alt="" />
          <div className="flex flex-col h-1">
            <h1 className="text-white text-base">{user.displayName}</h1>
            <button
              onClick={handleSignOut}
              className="text-white cursor-pointer font-semibold hover:underline text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
