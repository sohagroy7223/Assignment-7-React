import "./App.css";
import Hero from "./components/Hero Section/Hero";
import Main from "./components/Main Section/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Main></Main>
      <div className="overflow-x-auto rounded-box border border-base-content/5  flex text-black gap-3">
        <table className="table w-[70%] bg-white ">
          {/* head */}
          <thead className="text-black">
            <tr className="flex justify-between">
              <th>Items</th>
              <div className="flex  gap-20">
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </div>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="bg-white w-[30%] rounded-xl h-80">
          <h3>s</h3>
        </div>
      </div>
    </>
  );
}

export default App;
