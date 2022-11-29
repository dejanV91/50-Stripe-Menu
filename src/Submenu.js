import React from "react";
import { useGlobalContext } from "./context";

export const Submenu = () => {
  const { isSubmenuOpen, openSbmenu, closeSubmenu } = useGlobalContext();
  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
      submenu
    </aside>
  );
};
