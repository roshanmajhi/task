
import React from "react";
import './SCSS/style.scss';
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Ourexpertise from "./Components/Ourexpertise";
import Casestudy from "./Components/Casestudy";
import Career from "./Components/Career";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Scrooltotop from "./Components/Scrooltotop";
function App() {
  return (
    <>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home input/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Ourexpertise" element={<Ourexpertise/>} />
        <Route path="/Casestudy" element={<Casestudy/>} />
        <Route path="/Career" element={<Career/>} />
        <Route path="/Blogs" element={<Blogs/>} />
      </Routes>
      <Scrooltotop/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
