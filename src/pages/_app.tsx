import Layout from "@/components/commons/layout";
import "@/styles/global.css";
import type { AppProps } from "next/app";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: "beanmarket-94381.appspot.com",
//   messagingSenderId: "354444562366",
//   appId: "1:354444562366:web:85f8296355fc5a4c9433ef",
//   measurementId: "G-9J4C7QQJSV",
// };
// export const firebaseApp = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
