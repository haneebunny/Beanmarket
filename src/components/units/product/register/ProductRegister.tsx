import React from "react";
import { useState } from "react";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { firebaseApp } from "@/pages/_app";

export default function ProductRegister() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    title: "",
    price: 0,
    img: "",
    desc: "",
  });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  async function onClickSubmit() {
    console.log(inputs);
    const product = collection(getFirestore(firebaseApp), "product");
    console.log("product:::", product);
    // const result = await getDocs(product);
    // console.log(result);
    await addDoc(product, {
      ...inputs,
      createdAt: Date.now(),
    });
    alert("게시물 등록에 성공하였습니다!");
    // router.push("/admin/register");
  }
  return (
    <form>
      <div>
        상품명: <input id="title" type="text" onChange={onChangeInputs} />
      </div>
      <div>
        가격: <input id="price" onChange={onChangeInputs} />
      </div>
      <div>
        이미지: <input id="img" type="text" onChange={onChangeInputs} />
      </div>
      <div>
        설명: <input id="desc" type="text" onChange={onChangeInputs} />
      </div>
      <div>
        <button onClick={onClickSubmit}>등록하기</button>
      </div>
    </form>
  );
}
