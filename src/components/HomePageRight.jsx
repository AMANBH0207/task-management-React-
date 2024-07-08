import React, { useEffect, useState } from 'react';
import "../style/HomePageRight.css";
import Chart from "chart.js/auto";
import { Bar,Pie } from "react-chartjs-2";




function HomePageRight({count}) {

  const [memberCount, setMemberCount] = useState();
  useEffect(()=>{
    setMemberCount(count);
    console.log("hi");
  },[count])
  

const labels = ["January", "February", "March", "April", "May", "June", "July", "August"];
const barColors = [
  "#827cdf",
  "#2cb537",
  "#f99c5e",
  "#ee25c0",
  "#e9bc19",
  "#db1c5d",
  "#c70d79",
  "#23b3cf",
];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: barColors,
        borderColor: "#000000",
        data: [1, 10, 5, 2, 20, 30, 45, 50],
      },
    ],
  };


  return (
    <>
    <div className="rightSection">
            <div className="rightSection1">
              <div className="members"><h3>Members({memberCount})</h3><h5>view all</h5></div>
              <div className="memberimg"></div>
            </div>
            <div className="calender">

            <div>
                <Bar data={data} />
            </div>

            </div>
            <div className="analytics">
              <div className="chartLegend">
                <div>
                  <Pie data={data} />
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default HomePageRight