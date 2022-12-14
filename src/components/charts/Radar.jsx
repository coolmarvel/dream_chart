import React from "react";

export default class Radar extends React.Component {
  constructor(props) {
    super(props);

    this.echarts = this.props.echarts;
  }

  render() {
    return (
      <div id="chartRadar" style={{ width: "100%", minHeight: 370 }}></div>
    );
  }

  componentDidMount() {
    this.chartRadar = this.echarts.init(document.getElementById("chartRadar"));
    this.constructOption();
  }

  constructOption = () => {
    let option = {
      tooltip: {},
      legend: {
        data: [
          "Allocated Budget ( Allocated Budget )",
          "Actual Spending ( Actual Spending )",
        ],
      },
      radar: {
        // shape: 'circle',
        name: {
          color: "#fff",
          backgroundColor: "#999",
          borderRadius: 3,
          padding: [3, 5],
        },
        // alignTicks: true,
        indicator: [
          { name: "Sales ( sales )", max: 6500 },
          { name: "Administration ( Administration )", max: 16000 },
          {
            name: "Information Techology ( Information Techology )",
            max: 30000,
          },
          { name: "Customer Support ( Customer Support )", max: 38000 },
          { name: "Development ( Development )", max: 52000 },
          { name: "Marketing ( Marketing )", max: 25000 },
        ],
      },
      series: [
        {
          name: "Budget vs spending ( Budget vs spending )",
          type: "radar",
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: "Allocated Budget ( Allocated Budget )",
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: "Actual Spending ( Actual Spending )",
            },
          ],
        },
      ],
    };

    this.chartRadar.setOption(option);
  };
}
