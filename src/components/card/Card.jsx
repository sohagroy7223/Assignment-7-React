import React from "react";
import { MdClear } from "react-icons/md";

const Card = ({ fav, handelRemovefavorit }) => {
  //   console.log(fav);
  return (
    <div className="flex gap-2 border-2 border-blue-600 rounded-2xl m-2 p-2.5 items-center border-t-violet-800">
      <img className="w-20" src={fav.image} alt="img" />
      <div>
        <h4 className="font-bold">{fav.title}</h4>
        <div className="flex justify-around gap-4">
          <p>price: ${fav.currentBidPrice}</p>
          <p>Bids: {fav.bidsCount}</p>
          <span onClick={() => handelRemovefavorit(fav)}>
            <MdClear className="font-bold" size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
