import { useEffect, useState } from "react";
import Product from "../product/Product";

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [Main]);
  // console.log(products);
  return (
    <div>
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Main;
