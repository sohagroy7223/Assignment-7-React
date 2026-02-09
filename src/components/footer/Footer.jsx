import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-black h-56 text-center p-10 mt-10 mx-auto">
      <h2 className="text-blue-900 text-2xl font-bold ">
        SOHAG <span className="text-yellow-500">Gallery</span>
      </h2>
      <div className="flex justify-center gap-2 mt-3">
        <h4>bind.</h4>
        <h4>Win.</h4>
        <h4>Own.</h4>
      </div>
      <div className="flex justify-center gap-5 mt-3 mb-8">
        <h4>Home</h4>
        <h4>Auctions</h4>
        <h4>Categories</h4>
        <h4>How to works</h4>
      </div>
      <p>©{new Date().getFullYear()} Sohag. All rights reserved.</p>
    </div>
  );
};

export default Footer;
