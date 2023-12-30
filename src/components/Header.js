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

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

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

  return (
    <div className="absolute z-50 w-screen top-0 px-12 bg-gradient-to-b from-black flex items-center justify-between">
      <img className="w-44 cursor-pointer" src={headerLogo} alt="" />

      {user !== null && (
        <div className="flex item-center justify-center gap-4">
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
