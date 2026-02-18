import React, { useEffect, useState } from "react";
import Product from "../../product/Product";

const Products = ({ handelFavorite }) => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelToHeard = (product) => {
    setActive(active === product ? null : product.id);
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-box text-black">
        <table className="table">
          <thead className="text-black">
            <tr>
              <th>Items</th>
              <th></th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product
                handelToHeard={handelToHeard}
                handelFavorite={handelFavorite}
                key={product.id}
                product={product}
                active={active === product.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
