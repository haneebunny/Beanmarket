import Layout from "@/components/commons/layout";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcJ4BNrLQXb_44NcBT4lBzA9ALpdZsNpc",
  authDomain: "beanmarket-94381.firebaseapp.com",
  databaseURL:
    "https://beanmarket-94381-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "beanmarket-94381",
  storageBucket: "beanmarket-94381.appspot.com",
  messagingSenderId: "354444562366",
  appId: "1:354444562366:web:85f8296355fc5a4c9433ef",
  measurementId: "G-9J4C7QQJSV",
};
export const firebaseApp = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
