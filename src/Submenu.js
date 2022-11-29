import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

export const Submenu = () => {
  const { isSubmenuOpen, locations } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { centerBtn, bottomBtn } = locations;
    submenu.style.left = `${centerBtn}px`;
    submenu.style.top = `${bottomBtn}px`;
  }, [locations]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      submenu
    </aside>
  );
};
