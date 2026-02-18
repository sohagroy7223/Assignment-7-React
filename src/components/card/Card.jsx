import React from "react";

const Card = ({ fav }) => {
  console.log(fav);
  return (
    <div className="flex gap-2 border-2 rounded-2xl p-2.5 items-center border-t-violet-800">
      <img className="w-20" src={fav.image} alt="img" />
      <div>
        <p>{fav.title}</p>
        <div className="flex justify-baseline gap-4">
          <p>price: ${fav.currentBidPrice}</p>
          <p>Bids: {fav.bidsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
