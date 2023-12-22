import Header from "./Header";
import backgroundImage from "./../assets/background-image.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <img src={backgroundImage} alt="" />
      <form className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col p-12 bg-black/85 rounded">
        <h1 className="font-semibold text-white text-4xl mb-9">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-2 bg-neutral-800 text-zinc-500 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 bg-neutral-800 text-zinc-500 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 bg-neutral-800 text-zinc-500 rounded"
        />
        <button className="py-3 px-32 text-white mt-9 bg-red-600 rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <h3 className=" mt-16 text-zinc-500">
          {isSignInForm ? "New to Netflix?" : "Already a member?"}
          <span
            className="text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? " Sign up Now" : " Sign in Now"}
          </span>
        </h3>
        <h4 className="text-zinc-600 text-sm mt-4">
          Sign in is protected by Google reCAPTCHA to ensure <br /> you’re not a
          bot.
        </h4>
      </form>
    </div>
  );
};

export default Login;
