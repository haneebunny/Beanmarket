import React from "react";
import { GoogleLogin } from "../../../api/firebase.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const googleProvider = new GoogleAuthProvider();
// const auth = getAuth();
export default function Login() {
  // GoogleLogin();
  // signInWithPopup(auth, googleProvider)
  //   .then((result) => {
  //     const user = result.user;
  //     console.log(user);
  //     // ...
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // const onClickGoogleLogin = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  return (
    <div className="flex flex-col">
      <form className="flex flex-col items-center">
        <input className="w-52 border border-gray-200 focus:outline-none" />
        <input className="w-52 border border-gray-700 focus:outline-none" />
        하이
        <input></input>
        <button onClick={GoogleLogin}>Google</button>
      </form>
    </div>
  );
}
