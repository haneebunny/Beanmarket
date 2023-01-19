import React from "react";
import { HiShoppingCart } from "react-icons/hi";

export default function Header() {
  return (
    <div className="flex flex-row items-center">
      <p className="text-xl font-semibold">Beanmarket</p>
      <p>장바구니</p>
      <HiShoppingCart />
      <p>프로필</p>
      <p>상품등록</p>
    </div>
  );
}
