import { googleLogin, googleLogout } from "@/api/firebase";
import Link from "next/link";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();

export default function Header() {
  const [user, setUser] = useState<any>();

  const handleLogin = async () => {
    await googleLogin().then(setUser);
  };

  const handleLogout = () => {
    googleLogout().then(setUser);
  };
  // const onClickLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };
  return (
    <header className="flex flex-row justify-between items-center">
      <Link href="/">
        <p className="text-xl font-semibold">Beanmarket</p>
      </Link>
      <nav className="flex items-center gap-4">
        <p>장바구니</p>
        <HiShoppingCart />
        <a href="/product/register">상품등록</a>
        {user ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <button onClick={handleLogin}>로그인</button>
        )}
        {/* <button onClick={onClickLogout}>로그아웃</button> */}
      </nav>
    </header>
  );
}
