import React from "react";
import "./Home.css";
import Chart1 from "../charts/chart1";

function Home() {
  return (
    <div className="home">
      <h1>CHARTS</h1>
      <div className="container">
        <div className="item item-1">
          <Chart1 />
        </div>
        <div className="item item-2">Chart2</div>
        <div className="item item-3">Chart3</div>
        <div className="item item-4">Chart4</div>
        <div className="item item-5">Chart5</div>
        <div className="item item-6">Chart6</div>
      </div>
    </div>
  );
}

export default Home;
