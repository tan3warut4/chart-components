import { Typography, Box } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { graphic } from "echarts";
import mockupData from "../../mockData/mockupData";
import { getThaiDate } from "../../functions/convertDate";
import { getDate, getYData } from "../../functions/convertData";
import { TimeRangeSelectData } from "../../functions/timeRageSelectData";
import { TimeRangeSelectDate } from "../../functions/timeRangeSelectDate";
import { useEffect, useState, useCallback } from "react";

const Echart = ({ timeSelect, handleRestore }) => {
  const [YData] = useState(getYData(mockupData));
  const [thaiDateFormatData] = useState(getThaiDate(getDate(mockupData)));
  const [currentYData, setCurrentYData] = useState(
    TimeRangeSelectData(timeSelect, getYData(mockupData))
  );
  const [currentThaiDateFormatData, setCurrentThaiDateFormatData] = useState(
    TimeRangeSelectDate(timeSelect, getThaiDate(getDate(mockupData)))
  );
  const [maxValue, setMaxValue] = useState(
    12
    // Math.round((YData.reduce((a, b) => a + b, 0) * 2) / currentYData.length)
  );

  const onChartClick = useCallback(() => {
    handleRestore("oneMonth");
  }, [handleRestore]);

  useEffect(() => {
    setCurrentYData(TimeRangeSelectData(timeSelect, YData));
    setCurrentThaiDateFormatData(
      TimeRangeSelectDate(timeSelect, thaiDateFormatData)
    );
  }, [timeSelect, YData, thaiDateFormatData]);

  useEffect(() => {
    setMaxValue(
      Math.round(
        (currentYData.reduce((a, b) => a + b, 0) * 2) / currentYData.length
      )
    );
  }, [currentYData]);

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
    toolbox: {
      feature: {
        restore: {
          title: "",
        },
      },
    },
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
        fontSize: 10,
      },
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
        minValueSpan: 1,
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

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography mt={1} sx={{ textAlign: "start", fontWeight: "bold" }}>
              อัตราผลตอบแทน
            </Typography>
          </Box>
        </Box>
        <Box>
          <ReactEcharts
            key={timeSelect}
            onEvents={{ restore: onChartClick }}
            option={option}
            style={{ height: "300px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Echart;
