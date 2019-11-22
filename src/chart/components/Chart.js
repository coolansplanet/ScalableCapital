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
    if (this.props.data.length > 0) {
      const config = generateChartConfig(this.props.data, this.props);
      this.setState({ config });
    }
  }

  render() {
    return (
      <div className="chart">
        {this.state.config && (
          <Line
            data={this.state.config.data}
            options={this.state.config.options}
            width={700}
            height={450}
          />
        )}
      </div>
    );
  }
}
