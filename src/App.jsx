import "./App.css";
import { CiHeart } from "react-icons/ci";
import Hero from "./components/Hero Section/Hero";
import Main from "./components/Main Section/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <div className="w-11/12 mx-auto">
        <h3 className="text-2xl font-bold mt-20">Active Auctions</h3>
        <p className="text-gray-300 mt-3">
          Discover and bid on extraordinary items
        </p>
      </div>
      <div className="main-container flex justify-between w-11/12 mx-auto text-center gap-3">
        <div className="left-container w-[70%] bg-white rounded-2xl">
          <div className="overflow-x-auto rounded-box border  text-black">
            <table className="table">
              {/* head */}
              <thead className="text-black">
                <tr>
                  <th>items</th>
                  <th>Current Bid</th>
                  <th>Time Left</th>
                  <th>Bid Now</th>
                </tr>
              </thead>
            </table>
            <Main></Main>
          </div>
        </div>
        <div className="right-container w-[30%] rounded-2xl bg-white">
          <div className="w-full mx-auto p-5 items-center">
            <div className="">
              <h3 className="text-black">
                {" "}
                <CiHeart className="w-full mx-auto  items-center" size={25} />
                <h3 className="text-xl font-medium">favorite items</h3>
                <hr />
                <div>
                  <h3 className="mt-4 text-lg font-medium">
                    Not Favorites yet
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                  <hr />
                  <div className="mt-3 flex justify-between">
                    <h3 className="font-medium">Total bids Amount</h3>
                    <p className="font-medium">000</p>
                  </div>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
