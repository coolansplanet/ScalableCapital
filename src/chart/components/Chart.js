import React from "react";
import { generateChartConfig } from "../helpers";
import { chartOptions as options } from "../constants";
import { Line } from "react-chartjs-2";
import "./Chart.scss";

export default class Chart extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }
  componentDidMount() {
    if (this.props.cones.length > 0) {
      const data = generateChartConfig(this.props);
      this.setState({ data });
    }
  }

  render() {
    return (
      <div className="chart">
        {this.state.data && (
          <Line
            data={this.state.data}
            options={options}
            width={700}
            height={450}
          />
        )}
      </div>
    );
  }
}
