import React from "react";
import { CiHeart } from "react-icons/ci";

const Product = ({ product, handelToHeard, active, handelFavorite }) => {
  return (
    <tr>
      <td>
        <img
          className="w-[100px] rounded-xl"
          src={product.image}
          alt={product.title}
        />
      </td>
      <td>{product.title}</td>
      <td>${product.currentBidPrice}</td>
      <td>{product.timeLeft}</td>
      <td>
        <span
          onClick={() => handelToHeard(product)}
          className="cursor-pointer rounded-lg shadow-md "
        >
          <CiHeart
            onClick={() => handelFavorite(product)}
            className={`transition-all duration-300 ${active ? "bg-red-500 scale-110" : ""}`}
            size={25}
          />
        </span>
      </td>
    </tr>
  );
};

export default Product;
