import React from "react";
import { Chart as ChartJs } from "chart.js";
import { generateChartConfig } from "../helpers";
import { getCones } from "../../core/provider";
import { Line } from "react-chartjs-2";
import "./Chart.scss";

export default class Chart extends React.Component {
  constructor() {
    super();
    this.state = { config: null };
  }
  componentDidMount() {
    getCones()
      .then(response => {
        const config = generateChartConfig(response.data, this.props);
        this.setState({ config });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="chart">
        <Line {...this.state.config} width={700} height={450} />
      </div>
    );
  }
}
