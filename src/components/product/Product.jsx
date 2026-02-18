import { IoIosHeart } from "react-icons/io";

const Product = ({ product, handelToHeard, active, handelFavorite }) => {
  return (
    <tr>
      <td>
        <img
          className="w-25 rounded-xl"
          src={product.image}
          alt={product.title}
        />
      </td>
      <td>{product.title}</td>
      <td>${product.currentBidPrice}</td>
      <td>{product.timeLeft}</td>
      <td>
        <span
          onClick={() => {
            if (!active) handelToHeard(product);
          }}
          className={` 
            ${active ? "cursor-not-allowed " : "cursor-pointer "}
          `}
        >
          <IoIosHeart
            onClick={() => handelFavorite(product)}
            className={`transition-all duration-300 ${active ? "text-red-500 scale-110" : "text-gray-300"}`}
            size={25}
          />
        </span>
      </td>
    </tr>
  );
};

export default Product;
