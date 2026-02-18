import "./App.css";
import { CiHeart } from "react-icons/ci";
import Hero from "./components/Hero Section/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Navbar/products/Products";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Card from "./components/card/card";

function App() {
  const [favorite, setFavorite] = useState([]);
  // const [count, setCount] = useState(0);
  const [active, setActive] = useState([]);

  const handelFavorite = (product) => {
    const addFavorite = [...favorite, product];
    setFavorite(addFavorite);
    console.log(addFavorite);
  };

  const handelToHeard = (product) => {
    setActive((prev) => {
      if (prev.includes(product.id)) {
        return prev;
      } else {
        return [...prev, product.id];
      }
    });

    // handelCount(product);
  };

  const handelRemovefavorit = (fav) => {
    console.log(fav);
    console.log(favorite);
    const remainingFavorite = favorite.filter(
      (favorite) => favorite.id !== fav.id,
    );
    console.log(remainingFavorite);
    setFavorite(remainingFavorite);
  };

  const countAmount = (favorite) => {
    console.log(favorite);
    const sum = favorite.reduce(
      (accumulator, currentValue) => accumulator + currentValue.currentBidPrice,
      0,
    );

    return sum;
  };

  // const handelCount = (product) => {
  //   const amount = product.currentBidPrice;
  //   const totalAmount = count + amount;
  //   setCount(totalAmount);
  // };
  // console.log(favorite);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-gray-200">
        <div className="mt-10 p-12">
          <h3 className="text-2xl font-semibold text-black">Active Auctions</h3>
          <p className="text-gray-500">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="main-container flex justify-between w-11/12 mx-auto gap-4 text-black">
          <div className="left-container bg-white w-[70%] rounded-2xl">
            <Products
              handelToHeard={handelToHeard}
              handelFavorite={handelFavorite}
              active={active}
              favorite={favorite}
            ></Products>
          </div>
          <div className="right-container bg-white w-[30%] rounded-2xl">
            <div className="flex justify-center p-5 items-center gap-1">
              <CiHeart size={27} />
              <h3 className="text-2xl font-medium">Favorite Items</h3>
            </div>
            <hr className="text-[#DCE5F3]" />
            <div className="text-center mt-3 p-3 ">
              {favorite.map((fav) => (
                <Card
                  key={fav.id}
                  handelRemovefavorit={handelRemovefavorit}
                  fav={fav}
                ></Card>
              ))}
              <div className={`${active.length === 0 ? "block" : "hidden"}`}>
                <h3 className="text-lg font-semibold">No favorite yet</h3>
                <p className="text-gray-600 p-3">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </div>
            </div>
            <hr className="mt-3.5 text-[#DCE5F3]" />
            <div className="flex justify-between p-5">
              <h3 className="text-lg font-medium">Total bids Amount</h3>
              <h3 className="text-lg font-medium">
                ${countAmount(favorite)}.00
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
