import React, { useEffect, useState } from "react";
import Product from "../../product/Product";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 text-black">
        <table className="table ">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>items</th>
              <th></th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product product={product}></Product>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
