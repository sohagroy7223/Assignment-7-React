import "./App.css";
import Hero from "./components/Hero Section/Hero";
import Main from "./components/Main Section/Main";
import Navbar from "./components/Navbar/Navbar";

const products = fetch("products.json").then((res) => res.json());
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Main products={products}></Main>
    </>
  );
}

export default App;
