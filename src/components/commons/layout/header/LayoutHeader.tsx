import React from "react";
import { HiShoppingCart } from "react-icons/hi";
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();

export default function Header() {
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
    <div className="flex flex-row items-center">
      <p className="text-xl font-semibold">Beanmarket</p>
      <p>장바구니</p>
      <HiShoppingCart />
      <a href="/product/register">상품등록</a>

      <a href="/login">로그인</a>
      {/* <button onClick={onClickLogout}>로그아웃</button> */}
    </div>
  );
}
