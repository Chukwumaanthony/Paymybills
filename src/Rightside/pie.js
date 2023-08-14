import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return opts.w.globals.series[opts.seriesIndex];
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                top: 40,              
                position: "center",
              },
            },
          },
        ],
      },
      series: [44, 55, 41, 17, 15],
    };
  }

  render() {
    return (
      <div className="donut" style={{padding: "rem", marginTop: "2.5rem"}}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="260"
        />
      </div>
    );
  }
}

export default Donut;