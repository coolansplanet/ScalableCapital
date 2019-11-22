import { fee } from "../constants";

export default (
  cones,
  riskLevel = 10,
  years = 10,
  initialSum = 10000,
  monthlySum = 200
) => {
  const { mu, sigma } = cones.find(cone => cone.riskLevel == riskLevel);
  const yearlyReturn = mu - fee;
  const monthlyReturn = yearlyReturn / 12;
  const months = 12 * years;
  const data = [];
  for (let oneMonth = 0; oneMonth <= months; ++oneMonth) {
    let t = oneMonth / 12;
    const oneMedian =
      initialSum * Math.exp(yearlyReturn * t) +
      (monthlySum * (Math.exp(monthlyReturn * oneMonth) - 1)) /
        (Math.exp(monthlyReturn) - 1);

    data.push({
      month: oneMonth,
      dataMedian: oneMedian,
      dataGood: Math.exp(Math.log(oneMedian) + Math.sqrt(t) * sigma * 1.645),
      dataBad: Math.exp(Math.log(oneMedian) - Math.sqrt(t) * sigma * 1.645)
    });
  }

  return data;
};
