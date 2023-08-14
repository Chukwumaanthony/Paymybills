import React from "react";
// import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function BarChart({ data }) {
  const series = [
    {
      name: "Pay my bills",
      data: [49, 80, 90, 25, 45, ],
    },
  ];
  const options = {
    colors: ["#FF993A", "#4576b5", ],
    chart: {
      type: "bar",
      height: 350,
      foreColor: "#373d3f",
      background: "#fffff",
      grid: {show: false,}
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        // endingShape: "rounded",
        borderRadius: "none",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      // show: true,
      width: 0,
      colors: ["red"],
    },
    xaxis: {
      categories: [
        "Data",
        "Airtime",
        "Cable Tv",
        "Electricity",
        "Internet",
      ],
    },
    yaxis: {
      title: {
        // text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  return (
    <div>
      <Chart options={options} type="bar" series={series} height="200" />
    </div>
  );
}
