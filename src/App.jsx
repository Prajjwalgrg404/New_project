import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './Component/Page1/Head/Header'
import Contact from './Component/Contact/Contact'
import Page1 from "./Component/Page1/Page1";
import Page2 from "./Component/Page2/Page2";
import Team from "./Team/Team";
import Home from "./Component/Home/Home";
import Landing from "./Component/Landing/Landing";
import About from "./Component/About/About";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/page1" element={<Page1/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/page2" element={<Page2/>}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
