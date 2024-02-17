import React from "react";
import "./overview.scss";
const Card = ({ imgUrl, title, total, color }) => {
  return (
    <div className="card">
      <div className="icon">
        <img
          src={imgUrl}
          alt="icon"
          className="object-cover w-[48px] h-48px]"
        />
      </div>
      <div className="title">
        <h2>{title}</h2>
        <h1 className="total" style={{color: `${color}`}}>{total}</h1>
      </div>
    </div>
  );
};
export default function Overivew() {
  return (
    <div className="overview">
      <Card
        total={`120K+`}
        imgUrl="https://static.vecteezy.com/system/resources/previews/013/167/041/original/investment-money-3d-illustration-free-png.png"
        title="Total Investments"
        color="#6D8B3A"
      />
      <Card
        total="₦2BN+"
        imgUrl="https://cdn-icons-png.flaticon.com/512/6289/6289247.png"
        title="Monthy Expenditures"
        color="#313948"
      />
      <Card
        total="900M+"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPcfdmPh2H1ik2bw88BXflQPqYYUcthnunNahBylGYg&s"
        title="Annual Savings"
        color="#FF7F29"
      />
    </div>
  );
}
