import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

export const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySumbenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const centerBtn = (tempBtn.left + tempBtn.right) / 2;
    const bottomBtn = tempBtn.bottom - 3;
    openSubmenu(page, { centerBtn, bottomBtn });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-center" onMouseOver={handleSubmenu}>
          <div className="nav-header">
            <img className="nav-logo" src={logo} alt="logo" />
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySumbenu}>
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySumbenu}>
                developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySumbenu}>
                company
              </button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    </>
  );
};
