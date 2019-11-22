import React from "react";
import { Chart as ChartJs } from "chart.js";
import { generateChartConfig } from "../helpers";
import { getCones } from "../../core/provider";
import "./Chart.scss";

export default class Chart extends React.Component {
  componentDidMount() {
    getCones()
      .then(response => {
        const config = generateChartConfig(response.data, this.props);
        const context = this.canvas.getContext("2d");
        const myChart = new ChartJs(context, config);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="chart">
        <canvas ref={ref => (this.canvas = ref)} width={700} height={450} />
      </div>
    );
  }
}
