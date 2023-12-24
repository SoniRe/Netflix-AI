import Header from "./Header";
import backgroundImage from "./../assets/background-image.jpg";
import { useState, useRef } from "react";
import { checkValidData } from "./../utils/validate";
import { auth } from "./../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the Form Data
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    if (isSignInForm) {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.errorCode + " " + error.errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Header />
      <img src={backgroundImage} alt="" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-[29%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col p-12 bg-black/85 rounded"
      >
        <h1 className="font-semibold text-white text-4xl mb-9">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-2 bg-neutral-800 text-zinc-500 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 bg-neutral-800 text-zinc-500 rounded"
          defaultValue="aditya@gmail.com"
        />
        <p className=" text-orange-400 text-sm">
          {errorMessage === "Email ID is not Valid" &&
            "Please enter a valid email address"}
        </p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 bg-neutral-800 text-zinc-500 rounded"
          defaultValue="12345678"
        />
        <p className=" text-orange-400">
          {errorMessage === "Password is not Valid" &&
            "Your password must contain 8 characters "}
        </p>

        <p className=" text-orange-400">
          {errorMessage !== "Password is not Valid" &&
            errorMessage !== "Email ID is not Valid" &&
            errorMessage !== null &&
            errorMessage}
        </p>

        <button
          className="py-3 px-32 text-white mt-9 bg-red-600 rounded"
          onClick={handleButtonClick}
        >
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
