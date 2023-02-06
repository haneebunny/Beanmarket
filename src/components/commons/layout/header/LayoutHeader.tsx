import {
  googleLogin,
  googleLogout,
  onUserStateChange,
  writeUserData,
} from "@/api/firebase";
import User from "@/components/units/user/User";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

export default function Header() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    onUserStateChange((user: any) => {
      setUser(user);
      writeUserData(user.uid);
    });
  }, []);

  console.log(user);

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
          <>
            <User user={user} />
            <button onClick={googleLogin}>로그아웃</button>
          </>
        ) : (
          <button onClick={googleLogout}>로그인</button>
        )}
      </nav>
    </header>
  );
}
