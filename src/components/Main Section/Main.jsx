import React, { use } from "react";

const Main = ({ products }) => {
  const allProducts = use(products);
  //   console.log(allProducts);
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-2xl font-bold mt-20">
        Active Auctions {allProducts.length}
      </h3>
      <p className="text-gray-300 mt-3">
        Discover and bid on extraordinary items
      </p>
    </div>
  );
};

export default Main;
