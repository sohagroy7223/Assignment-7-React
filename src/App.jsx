import "./App.css";
import Hero from "./components/Hero Section/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Navbar/products/Products";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <div className="main-container flex justify-between w-11/12 mx-auto gap-4">
        <div className="left-container  bg-white w-[70%]">
          <Products></Products>
        </div>
        <div className="right-container bg-white w-[30%]">r</div>
      </div>
    </>
  );
}

export default App;
