import { useDispatch, useSelector } from "react-redux";
import "./sidebar.scss";
import { toggleSidebar } from "../../../store/expandSlice";
import { MdArrowForwardIos, MdSavings, MdSpaceDashboard, MdWallet } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { GiExpense } from "react-icons/gi";
import { useState } from "react";


export default function Sidebar() {
  const dispatch = useDispatch();
  let location = useLocation();
  const { expandSidebar } = useSelector((state) => ({ ...state }));
  const expand = expandSidebar.expandSidebar;
const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleExpand = () => {
    dispatch(toggleSidebar());
  };

  const path = location.pathname;
  return (
    <div>
      <div className={`sidebar fixed left-0 md:relative ${expand ? "opened" : ""}`}>
        <div className="sidebar__toggle" onClick={() => handleExpand()}>
          <div
            style={{
              transform: `${expand ? "rotate(180deg)" : ""}`, 
              transition: "all .2s",
            }}
          >
            <MdArrowForwardIos />
          </div>
        </div>
        <div className="sidebar__container">
     
          <div className="sidebar__user">
            <img
              src="https://static.thenounproject.com/png/363640-200.png"
              alt="user"
            />
            <div className="show">
              <span>Welcome back 👋</span>
              <span>Onyekachi</span>
            </div>
          </div>
          <div className="sidebar__list ">
            <Link to="/" className={`li ${path == "/" ? "active" : ""}`}>
              <MdSpaceDashboard />
              <span className="show">Dashboard</span>
            </Link>
            <Link
              to="/investments"
              className={`li ${path == "/investments" ? "active" : ""}`}
            >
              <MdWallet />
              <span className="show">Investments</span>
            </Link>
            <Link
              to="/savings"
              className={`li ${path == "/savings" ? "active" : ""}`}
            >
              <MdSavings />
              <span className="show">Savings</span>
            </Link>
            <Link
              to="/expenses"
              className={`li ${path == "/expenses" ? "active" : ""}`}
            >
              <GiExpense />
              <span className="show">Expenses</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
