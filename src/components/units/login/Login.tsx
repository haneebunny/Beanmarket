import React, { useState } from "react";
import { googleLogin, googleLogout } from "../../../api/firebase.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const googleProvider = new GoogleAuthProvider();
// const auth = getAuth();
export default function Login() {
  const [user, setUser] = useState<any>();
  // const handleLogin = () => {
  // };

  googleLogin().then((user) => setUser(user));

  const handleLogout = () => {
    googleLogout().then(setUser);
  };

  return (
    <div className="flex flex-col">
      <form className="flex flex-col items-center">
        <input className="w-52 border border-gray-200 focus:outline-none" />
        <input className="w-52 border border-gray-700 focus:outline-none" />
        하이
        <input></input>
        {/* <button onClick={handleLogin}>Google</button> */}
        <button onClick={handleLogout}>Logout</button>
      </form>
    </div>
  );
}
