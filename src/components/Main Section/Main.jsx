import { useEffect, useState } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [Main]);
  // console.log(products);
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-2xl font-bold mt-20">
        Active Auctions {products.length}
      </h3>
      <p className="text-gray-300 mt-3">
        Discover and bid on extraordinary items
      </p>
    </div>
  );
};

export default Main;
