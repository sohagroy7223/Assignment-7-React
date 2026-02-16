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
        <span
          onClick={() => handelToHeard(product.id)}
          className=" bg-gray-200 
                 cursor-pointer rounded-lg shadow-md"
        >
          {
            <CiHeart
              className={` transition-all duration-300
          ${active ? "bg-red-500 scale-110" : ""}`}
              size={25}
            />
          }
        </span>
      </td>
    </tr>
  );
};

export default Product;
