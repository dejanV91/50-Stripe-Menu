import React from "react";
import { Navbar } from "./Navbar";
import { Submenu } from "./Submenu";
import { Hero } from "./Hero";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </>
  );
}

export default App;
