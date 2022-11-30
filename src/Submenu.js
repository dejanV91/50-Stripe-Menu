import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";

export const Submenu = () => {
  const {
    isSubmenuOpen,
    locations,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [column, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { centerBtn, bottomBtn } = locations;
    submenu.style.left = `${centerBtn}px`;
    submenu.style.top = `${bottomBtn}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [locations, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};
