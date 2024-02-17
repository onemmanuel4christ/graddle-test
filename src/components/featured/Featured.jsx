import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const Featured = ({title, longTitle, desc, amount}) => {
  return (
    <div className="featured bg-white rounded-md">
      <div className="top">
        <h1 className="title">{title}</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredBar">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">{longTitle}</p>
        {/* <p className="title">Total Revenue made today</p> */}
        <p className="amount">{amount}</p>
        <p className="desc">
         {desc}
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">120M.6k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">280M</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">12.6k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
