import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Upload from "./components/Upload";
import Footer from "./components/Footer";

import Result from "./result/Result";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Upload />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
