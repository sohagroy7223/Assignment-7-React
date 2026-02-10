import React from "react";
import { CiHeart } from "react-icons/ci";
const Product = ({ product, handelToHeard, active }) => {
  //   console.log(product);
  return (
    <tr>
      <td>
        <img className="w-[100px] rounded-xl" src={product.image} alt="" />
      </td>
      <td>{product.title}</td>
      <td>${product.currentBidPrice}</td>
      <td>{product.timeLeft}</td>
      <td>
        {
          <CiHeart
            onClick={() => handelToHeard(product.id)}
            className={`outline-1 cursor-pointer ${active ? "bg-red-700" : "bg-white"}`}
            size={25}
          />
        }
      </td>
    </tr>
  );
};

export default Product;
