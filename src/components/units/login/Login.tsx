import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
export default function Login() {
  const onClickGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="flex flex-col">
      <form className="flex flex-col items-center">
        <input className="w-52 border border-gray-200 focus:outline-none" />
        <input className="w-52 border border-gray-700 focus:outline-none" />
        하이
        <input></input>
        <button onClick={onClickGoogleLogin}>Google</button>
      </form>
    </div>
  );
}
