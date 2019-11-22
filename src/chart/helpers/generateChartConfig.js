import { generateReport } from "../../common/helpers";
import {
  chartOptions as options,
  chartGoods,
  chartMedians,
  chartBads
} from "../constants";

export default (cones, { riskLevel, years, initialSum, monthlySum }) => {
  const labels = [];
  const medians = [];
  const goods = [];
  const bads = [];
  generateReport(cones, riskLevel, years, initialSum, monthlySum).forEach(
    (oneElement, i) => {
      const { dataMedian, dataGood, dataBad } = oneElement;
      medians.push(dataMedian);
      goods.push(dataGood);
      bads.push(dataBad);
      labels.push(i % 12 == 0 ? i / 12 : "");
    }
  );
  const data = {
    datasets: [
      {
        ...chartGoods,
        data: goods
      },
      {
        ...chartMedians,
        data: medians
      },
      {
        ...chartBads,
        data: bads
      }
    ],
    labels
  };

  return {
    type: "line",
    data,
    options
  };
};
