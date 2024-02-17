import { useSelector } from "react-redux";
import "./layout.scss";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import { useState } from "react";
export default function DashboardLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(true);

  const { expandSidebar } = useSelector((state) => ({ ...state }));
  const showSidebar = expandSidebar.expandSidebar;

  return (
    <div className="dashboard">
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="layout">
        {openSidebar && <Sidebar />}
        <div
          className="layout__main p-4 w-full"
          // style={{ marginLeft: `${showSidebar ? "280px" : "80px"}` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
