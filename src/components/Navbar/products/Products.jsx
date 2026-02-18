import React, { useEffect, useState } from "react";
import Product from "../../product/Product";

const Products = ({ handelFavorite, handelToHeard, favorite, active }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
                active={favorite.find((fav) => fav.id === product.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
