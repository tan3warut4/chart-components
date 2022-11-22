import React from "react";
import { Typography, Box } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const Echart = () => {
  const option = {
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      position: 'right',
    },
    dataZoom: [
      {
        type: "inside",
        throttle: 50,
      },
    ],
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {color: '#063970'}
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle: {color: '#063970'}
      },
    ],
  };

  return (
    <>
      <Box>
        <Typography mt={1} sx={{ textAlign: "center" }}>
          Sample Chart By Echart
        </Typography>
        <Box>
          <ReactEcharts option={option} style={{ height: "300px" }} />
        </Box>
      </Box>
    </>
  );
};

export default Echart;
