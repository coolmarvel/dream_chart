import React from "react";
import * as echarts from "echarts";
// import Bar from "../components/charts/Bar";
import BarFunc from "../components/charts/BarFunction";
// import LineFunc from "../components/charts/LineFunction";
import Line from "../components/charts/Line";
import Pie from "../components/charts/Pie";
import Radar from "../components/charts/Radar";

export default function ChartPage() {
  const styles = {
    container: {
      padding: "10px 0",
    },
    item: {
      margin: "10px 0",
      background: "#FFFFFF",
    },
  };

  const renderTitle = (item) => {
    return <div style={{ padding: 10 }}>{item.title}</div>;
  };

  const renderChart = (type) => {
    switch (type) {
      case "line":
        return <Line echarts={echarts} />;
      case "bar":
        return <BarFunc echarts={echarts} />;
      case "pie":
        return <Pie echarts={echarts} />;
      case "radar":
        return <Radar echarts={echarts} />;
      default:
        break;
    }
  };

  const getAllCharts = () => {
    const charts = [
      { type: "bar", title: "Basic Bar" },
      { type: "line", title: "Tooltip & DataZoom" },
      { type: "radar", title: "Basic Radar" },
      { type: "pie", title: "Basic Pie" },
    ];

    return charts.map((item, index) => {
      return (
        <li key={index} className="box" style={styles.item}>
          {renderTitle(item)}
          <div style={{ padding: "0 10px" }}>{renderChart(item.type)}</div>
        </li>
      );
    });
  };

  return (
    <div>
      <ul style={styles.container}>{getAllCharts()}</ul>
    </div>
  );
}
