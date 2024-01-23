import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }
  console.log(prices)
  console.log(date)

  /*here i which starts from 0 to 577
   0: 1679482872672      // at [0] index is the date  
1: 45157730886638.28   //// at [1] index is the price

// its in charData /data/prices/array/ you see 0 and 1 and time is in miliseconds */


// we had made object here 
  const dataa = {
    labels: date,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices ,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={dataa}
    />
  );
};

export default Chart;
