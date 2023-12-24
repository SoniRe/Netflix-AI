import headerLogo from "./../assets/netflix-header-logo.png";
import userIcon from "./../assets/user-icon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

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
    <div className="absolute w-screen top-0 px-40 bg-gradient-to-b from-black flex items-center justify-between">
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
