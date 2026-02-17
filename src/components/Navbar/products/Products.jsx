import Product from "../../product/Product";

const Products = ({ products, handelToHeard, active }) => {
  return (
    <div>
      <div className="overflow-x-auto rounded-box text-black">
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
