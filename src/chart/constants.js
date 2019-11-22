export const chartGoods = {
  data: [],
  label: "Good performance",
  borderColor: "rgba(127, 184, 0, 1)",
  backgroundColor: "rgba(127, 184, 0, 0.5)",
  fill: false,
  pointRadius: 0
};

export const chartMedians = {
  data: [],
  label: "Median performance",
  borderColor: "rgba(255, 180, 100, 1)",
  backgroundColor: "rgba(255, 180, 100, 0.5)",
  fill: false,
  pointRadius: 0
};

export const chartBads = {
  data: [],
  label: "Bad performance",
  borderColor: "rgba(255, 0, 0, 0.6)",
  backgroundColor: "rgba(255, 180, 100, 0.5)",
  fill: false,
  pointRadius: 0
};

export const chartOptions = {
  responsive: false,
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Years"
        },
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Valuation (EUR)"
        }
      }
    ]
  }
};
