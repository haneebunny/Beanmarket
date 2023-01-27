import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "@/pages/_app";

export default function ProductList() {
  const [products, setProducts] = useState<DocumentData[]>();

  useEffect(() => {
    async function fetchProducts() {
      const product = collection(getFirestore(firebaseApp), "product");
      const result = await getDocs(product);
      const products = result.docs.map((el) => el.data());
      console.log(products);
      setProducts(products);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {products?.map((product) => (
        <div key={product.title}>
          {product.title}
          {product?.createdAt}
        </div>
      ))}
    </div>
  );
}
