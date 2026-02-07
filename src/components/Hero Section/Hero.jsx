import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/XZz2HJZg/Banner-min.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div>
          <div className="max-w-lg">
            <h1 className="font-bold mb-4">
              Bid on Unique Items from Around the World
            </h1>
            <p className="mb-5 text-gray-300">
              Discover rare collectibles, luxury goods, and vintage treasures in
              our curated auctions
            </p>
            <button className="bg-white btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
