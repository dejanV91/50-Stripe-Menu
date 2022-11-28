import React from "react";
import logo from "./images/logo.svg";
import data from "./data";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <img className="nav-logo" src={logo} alt="logo" />
          </div>
          <ul className="nav-links">
            {data.map((item, index) => {
              const { page } = item;
              return (
                <li key={index}>
                  <button className="link-btn">{page}</button>
                </li>
              );
            })}
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    </>
  );
};
