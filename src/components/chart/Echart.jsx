import { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { useFetchData } from "../../hooks/useFetchData";
import { graphic } from "echarts";
import mockupData from "../../mockData/mockupData";
import { ConvertDate } from "../../functions/convertDate";
const Echart = () => {
  let dateData = [];
  let reverseDateData = [];
  let YData = [];
  let maxValue;

  const getDate = (data) => {
    data.map((yeildData) => {
      dateData.push(yeildData.settlement_date);
    });
  };
  const getYData = (data) => {
    data.map((yeildData) => {
      let yeildInfo =
        parseFloat(yeildData.bid_yield) + parseFloat(yeildData.offer_yield);
      let avgYeildInfo = yeildInfo / 2;
      let avgYeildInfoWithTwoDecimal = parseFloat(avgYeildInfo.toFixed(2))
      console.log(typeof avgYeildInfoWithTwoDecimal)
      YData.push(avgYeildInfoWithTwoDecimal);
    });
  };

  getDate(mockupData);
  getYData(mockupData);

  let thaiDateFormatData = [];
  reverseDateData = dateData.reverse();
  reverseDateData.map((date) => {
    thaiDateFormatData.push(ConvertDate(date));
  });

  maxValue = Math.round((YData.reduce((a, b) => a + b, 0) * 2) / YData.length);

  // const { isLoading, isError, data, isFetched } = useFetchData();
  // if (isLoading) {
  //   console.log("Data is loading...");
  // } else if (isError) {
  //   console.log("Data fetching error....");
  // } else if (isFetched) {
  //   console.log("Data fetched successfuly");
  //   getDate(data);
  //   getYData(data);
  //   reverseDateData = dateData.reverse();
  //   maxValue = Math.round(
  //     (YData.reduce((a, b) => a + b, 0) * 2) / YData.length
  //   );
  // }

  const option = {
    tooltip: {
      trigger: "item",
      backgroundColor: "#F1f1f1",
      borderColor: "#F1f1f1",
      extraCssText: "text-align: center;",
      position: "top",
      formatter: "{b}<br/>{c} %",
      valueFormatter: (value) => value.toFixed(2) + "%",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: thaiDateFormatData,
    },
    yAxis: {
      type: "value",
      position: "right",
      axisLabel: {
        formatter: "{value} %",
      },
      min: 0,
      max: maxValue - 1,
    },
    dataZoom: [
      {
        id: "dataZoomY",
        type: "inside",
        throttle: 150,
        minSpan: 40,
        orient: "vertical",
        yAxisIndex: [0],
        filterMode: "weakFilter",
      },
      {
        id: "dataZoomX",
        type: "inside",
        xAxisIndex: [0],
        filterMode: "filter",
        orient: "horizontal",
        minValueSpan: 2,
      },
    ],
    series: [
      {
        name: "date",
        type: "line",
        data: YData,
        itemStyle: { color: "#063970" },
        smooth: true,

        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(207, 229, 255, 0.8)",
            },
            {
              offset: 1,
              color: "#ffffff",
            },
          ]),
        },
        emphasis: {
          areaStyle: {
            //--> to avoid the fade effect, set the same color
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(207, 229, 255, 0.8)",
              },
              {
                offset: 1,
                color: "#ffffff",
              },
            ]),
          },
        },
      },
    ],
  };

  return (
    <>
      <Box>
        <Typography mt={1} sx={{ textAlign: "start", fontWeight: "bold" }}>
          อัตราผลตอบแทน
        </Typography>
        <Box>
          <ReactEcharts option={option} style={{ height: "300px" }} />
        </Box>
      </Box>
    </>
  );
};

export default Echart;
