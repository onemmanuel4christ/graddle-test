import React from "react";
import "./header.scss";
import { MdNotifications, MdOutlineMenu } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect } from "react";
export default function Header({ openSidebar, setOpenSidebar }) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpenSidebar(false);
      } else {
        setOpenSidebar(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header h-[72px] sticky top-0 z-10">
      <div className="logo">
        <span></span>
        <span></span>
        <span></span>
        <MdOutlineMenu
          fontSize={32}
          className="block lg:hidden"
          onClick={() => setOpenSidebar(!openSidebar)}
        />
      </div>
      <div className="flex gap-2 items-center">
        <MdNotifications fontSize={32} />
        <span className="flex gap-2 justify-center items-center">
          <FaRegCircleUser fontSize={32} />
          <h6 className="font-[700]">Onyekachi</h6>
        </span>
      </div>
    </div>
  );
}
