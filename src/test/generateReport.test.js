import { generateReport } from "../common/helpers";

describe("Time series are properly calculated", () => {
  const mockCones = [
    { riskLevel: 3, mu: 0.0216, sigma: 0.0215 },
    { riskLevel: 21, mu: 0.06, sigma: 0.0799 }
  ];
  const testExamples = (examples, obtainedNumbers) => {
    examples.forEach(oneExample => {
      const { category, location, result } = oneExample;
      expect(Number(obtainedNumbers[location][category].toFixed(2))).toEqual(
        result
      );
    });
  };
  it("Time series with risk 3", () => {
    const timeSeries = generateReport(mockCones, 3);

    const examples = [
      {
        category: "dataMedian",
        location: 0,
        result: 10000
      },
      {
        category: "dataMedian",
        location: 1,
        result: 10209.67
      },
      {
        category: "dataMedian",
        location: 30,
        result: 16379.15
      },
      {
        category: "dataMedian",
        location: 60,
        result: 22946.01
      },
      {
        category: "dataMedian",
        location: 90,
        result: 29706.09
      },
      {
        category: "dataMedian",
        location: 119,
        result: 36429.85
      },
      {
        category: "dataGood",
        location: 0,
        result: 10000
      },
      {
        category: "dataGood",
        location: 1,
        result: 10314.44
      },
      {
        category: "dataGood",
        location: 30,
        result: 17321.18
      },
      {
        category: "dataGood",
        location: 60,
        result: 24834.36
      },
      {
        category: "dataGood",
        location: 90,
        result: 32727.31
      },
      {
        category: "dataGood",
        location: 119,
        result: 40721.79
      },
      {
        category: "dataBad",
        location: 0,
        result: 10000
      },
      {
        category: "dataBad",
        location: 1,
        result: 10105.96
      },
      {
        category: "dataBad",
        location: 30,
        result: 15488.35
      },
      {
        category: "dataBad",
        location: 60,
        result: 21201.24
      },
      {
        category: "dataBad",
        location: 90,
        result: 26963.77
      },
      {
        category: "dataBad",
        location: 119,
        result: 32590.27
      }
    ];

    testExamples(examples, timeSeries);
  });
  it("Time series with risk 21", () => {
    const timeSeries = generateReport(mockCones, 21);

    const examples = [
      {
        category: "dataMedian",
        location: 0,
        result: 10000
      },
      {
        category: "dataGood",
        location: 1,
        result: 10637.81
      },
      {
        category: "dataBad",
        location: 30,
        result: 14386.24
      },
      {
        category: "dataMedian",
        location: 60,
        result: 26445.09
      },
      {
        category: "dataGood",
        location: 90,
        result: 52090.42
      },
      {
        category: "dataBad",
        location: 119,
        result: 31178.62
      }
    ];

    testExamples(examples, timeSeries);
  });
});
