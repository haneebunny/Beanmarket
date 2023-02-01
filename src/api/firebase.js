import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "beanmarket-94381.appspot.com",
  messagingSenderId: "354444562366",
  appId: "1:354444562366:web:85f8296355fc5a4c9433ef",
  measurementId: "G-9J4C7QQJSV",
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export async function googleLogin() {
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function googleLogout() {
  return signOut(auth)
    .then(() => console.log("로그아웃"))
    .catch((error) => console.log(error));
}
