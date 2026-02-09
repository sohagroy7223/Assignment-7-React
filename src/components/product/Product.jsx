import React from "react";
import { CiHeart } from "react-icons/ci";
const Product = ({ product }) => {
  //   console.log(product);
  return (
    <tr className="border">
      <td>
        <img className="w-[100px] rounded-xl" src={product.image} alt="" />
      </td>
      <td>{product.title}</td>
      <td>${product.currentBidPrice}</td>
      <td>{product.timeLeft}</td>
      <td>{<CiHeart size={25} />}</td>
    </tr>
  );
};

export default Product;
