import React, { useEffect, useState } from "react";
import Product from "../../product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelToHeard = (product) => {
    // console.log("clicked heard", product.id);
    setActive(active === product ? null : product);
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-box border  text-black">
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
              <Product
                handelToHeard={handelToHeard}
                key={product.id}
                product={product}
                active={active === product.id}
              ></Product>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
