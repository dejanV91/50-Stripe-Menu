import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Submenu />
      <Sidebar />
    </>
  );
};

export default App;
