import { Typography, Box } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { graphic } from "echarts";
import mockupData from "../../mockData/mockupData";
import { ConvertDate } from "../../functions/convertDate";
import { TimeRangeSelectData } from "../../functions/timeRageSelectData";
import { TimeRangeSelectDate } from "../../functions/timeRangeSelectDate";
import { useEffect, useState } from "react";

const Echart = ({ timeSelect }) => {
  const [YData, setYData] = useState([]);
  const [reverseDateData, setReverseDateData] = useState([]);
  const [thaiDateFormatData, setThaiDateFormatData] = useState([]);
  const [maxValue, setMaxValue] = useState();
  const [currentYData, setCurrentYData] = useState([]);
  const [currentThaiDateFormatData, setCurrentThaiDateFormatData] = useState(
    []
  );
  // get X and Y axis data function

  useEffect(() => {
    setCurrentYData(TimeRangeSelectData(timeSelect, YData));
    setCurrentThaiDateFormatData(
      TimeRangeSelectDate(timeSelect, thaiDateFormatData)
    );
  }, [timeSelect]);

  useEffect(() => {
    setMaxValue(
      Math.round((currentYData.reduce((a, b) => a + b, 0) * 2) / currentYData.length)
    );
  }, [currentYData]);

  const getThaiDate = (data) => {
    const result = data.map((date) => {
      return ConvertDate(date);
    });
    return result;
  };

  useEffect(() => {
    setYData(getYData(mockupData));
    setThaiDateFormatData(getThaiDate(getDate(mockupData)));
    setCurrentYData(TimeRangeSelectData("oneMonth", getYData(mockupData)));
    setCurrentThaiDateFormatData(
      TimeRangeSelectDate("oneMonth", getThaiDate(getDate(mockupData)))
    );
  }, []);

  

  const getDate = (data) => {
    const result = data.map((yeildData) => {
      return yeildData.settlement_date;
    });
    return result
  };

  const getYData = (data) => {
    const result = data.map((yeildData) => {
      let yeildInfo =
        parseFloat(yeildData.bid_yield) + parseFloat(yeildData.offer_yield);
      let avgYeildInfo = yeildInfo / 2;
      let avgYeildInfoWithTwoDecimal = parseFloat(avgYeildInfo.toFixed(2));
      return avgYeildInfoWithTwoDecimal;
    });
    return result;
  };

  // calculate max value of Y axis
  // maxValue = Math.round((YData.reduce((a, b) => a + b, 0) * 2) / YData.length);

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
      left: "6%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: currentThaiDateFormatData,
      nameTextStyle: {
        fontSize: 10
      }
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
        data: currentYData,
        itemStyle: { color: "#063970" },
        smooth: true,
        symbolSize: 8,
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
  let chart = <ReactEcharts option={option} style={{ height: "300px" }} />;

  return (
    <>
      <Box>
        <Typography mt={1} sx={{ textAlign: "start", fontWeight: "bold" }}>
          อัตราผลตอบแทน
        </Typography>
        <Box>{chart}</Box>
      </Box>
    </>
  );
};

export default Echart;
