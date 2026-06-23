"use client";

import { useEffect, useState } from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}
//Product[] ->an array containing only Product objects
//more to say data= Product[] means data is a array and the item inside it everyitem look like Product

function UseEffectExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  async function fetchListOfProducts() {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const res = await response.json();
      setTimeout(() => {
        if (res) {
          setData(res?.products);
          setIsLoading(false);
        }
      }, 1000);
    } catch (e) {
      console.log(e);
    } finally {
    }
  }
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  if (isLoading) return <h1>Loading ....</h1>;

  return (
    <div>
      <h1>Use Effect Example</h1>
      <div className="flex flex-col gap-2">
        {data.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseEffectExample;
