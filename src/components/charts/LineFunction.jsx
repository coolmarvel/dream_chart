import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../redux/actions/boardAction";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

export default function LineFunction() {
  const [loading, setLoading] = useState(false);

  const base = +new Date(2016, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  const valueBase = Math.random() * 300;
  const valueBase2 = Math.random() * 50;
  const data = [];
  const data2 = [];

  const chartRef = useRef(null);
  const [options, setOptions] = useState({
    animation: false,
    title: {
      left: "center",
      text: "Touch Screen Tooltip & DataZoom Demo",
      subtext: '"tootip" and "dataZoom" on mobile device',
    },
    legend: {
      top: "bottom",
      data: [""],
    },
    tooltip: {
      triggerOn: "none",
      position: function (pt) {
        return [pt[0], 130];
      },
    },
    toolbox: {
      left: "center",
      itemSize: 25,
      top: 55,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
      },
    },
    xAxis: {
      type: "time",
      // boundaryGap: [0, 0],
      axisPointer: {
        value: "2016-10-7",
        snap: true,
        lineStyle: {
          color: "#004E52",
          opacity: 0.5,
          width: 2,
        },
        label: {
          show: true,
          formatter: (params) => {
            return echarts.format.formatTime("yyyy-MM-dd", params.value);
          },
          backgroundColor: "#004E52",
        },
        handle: {
          show: true,
          color: "#004E52",
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        inside: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        inside: true,
        formatter: "{value}\n",
      },
      z: 10,
    },
    grid: {
      top: 110,
      left: 15,
      right: 15,
      height: 160,
    },
    dataZoom: [
      {
        type: "inside",
        throttle: 50,
      },
    ],
    series: [
      {
        name: "analog data",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#8ec6ad",
        },
        stack: "a",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#8ec6ad",
            },
            {
              offset: 1,
              color: "#ffe",
            },
          ]),
        },
        data: data,
      },
      {
        name: "analog data",
        type: "line",
        smooth: true,
        stack: "a",
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#d68262",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#d68262",
            },
            {
              offset: 1,
              color: "#ffe",
            },
          ]),
        },
        data: data2,
      },
    ],
  });

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption(options);
    }
  }, [options, chartRef]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #5900ff;
    width: 100%;
    height: 100%;
    background: #34343465;
  `;

  return (
    <div>
      {loading ? (
        <div
          className={loading ? "parentDisable" : ""}
          width="100%"
          height="100%"
        >
          <div className="overlay-box">
            <FadeLoader
              size={150}
              color={"#ffffff"}
              css={override}
              loading={loading}
              z-index={"1"}
              text="Loading your content..."
            />
          </div>
        </div>
      ) : (
        false
      )}
      <div
        ref={chartRef}
        style={{
          width: "100%",
          minHeight: 300,
        }}
      />
    </div>
  );
}

// const constructOption = () => {
//     for (var i = 1; i < 10; i++) {
//       var now = new Date((base += oneDay));
//       var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
//         "-"
//       );

//       valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
//       valueBase <= 0 && (valueBase = Math.random() * 300);
//       data.push([dayStr, valueBase]);

//       valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
//       valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
//       data2.push([dayStr, valueBase2]);
//     }
//   };
