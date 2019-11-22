const React = require("react");
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import PropTypes from "prop-types";
import { generateReport } from "../../common/helpers";
import "./Table.scss";

class Table extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    const { riskLevel, years, initialSum, monthlySum, cones } = this.props;
    if (cones.length > 0) {
      const data = generateReport(
        cones,
        riskLevel,
        years,
        initialSum,
        monthlySum
      );
      this.setState({ data });
    }
  }
  render() {
    return (
      <table className="table">
        <TableHeader />
        <TableBody data={this.state.data} />
      </table>
    );
  }
}

Table.defaultProps = {
  riskLevel: 3
};

Table.propTypes = {
  riskLevel: PropTypes.number
};

export default Table;
