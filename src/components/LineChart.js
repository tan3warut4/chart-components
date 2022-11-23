import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import ChartSelect from "./ChartSelect";
import VictoryChart from "./chart/VictoryChart";
import ChartPluginZoom from "./chart/ChartPluginZoom";
import Echart from "./chart/Echart";

export const LineChart = () => {
  const [timeSelect, setTimeSelect] = useState("1Month");
  const [chartDisplay, setChartDisplay] = useState("echart");
  const handleTimeSelect = (_event, updateFormats) => {
    setTimeSelect(updateFormats);
    console.log(timeSelect);
  };

  const data = [
    { argument: "1 ตค 65", value: 4 },
    { argument: "3 ตค 65", value: 4.5 },
    { argument: "6 ตค 65", value: 6 },
  ];

  return (
    <>
      <Container maxWidth="sm" sx={{ padding: 0 }}>
        {/* <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "start",
            marginTop: "1rem",
          }}
        >
          อัตราผลตอบแทน
        </Typography> */}
        <Paper sx={{ marginY: "1rem", padding: "1rem" }}>
          {/* <ChartSelect
            chartDisplay={chartDisplay}
            setChartDisplay={setChartDisplay}
          /> */}
          {chartDisplay === "victory" ? (
            <VictoryChart />
          ) : chartDisplay === "chartjs" ? (
            <ChartPluginZoom />
          ) : (
            <Echart />
          )}
          <Stack
            direction="row"
            sx={{ marginTop: "1rem", justifyContent: "center" }}
          >
            <ToggleButtonGroup
              sx={[
                { backgroundColor: "#f7f7f7", borderRadius: "30px" },
                {
                  ".MuiToggleButtonGroup-grouped": {
                    borderRadius: " 21px",
                  },
                },
              ]}
              value={timeSelect}
              onChange={handleTimeSelect}
              exclusive
            >
              <ToggleButton
                disableFocusRipple={true}
                disableRipple={true}
                size="small"
                sx={[
                  { border: "none", paddingX: "2rem" },
                  {
                    "&.Mui-selected": {
                      color: "#063970",
                      backgroundColor: "white",
                      borderRadius: "21px",
                      boxShadow: "0px -1px 29px 1px rgb(0 0 0 / 10%)",
                      "&.Mui-selected:hover": {
                        color: "#063970",
                        backgroundColor: "white",
                        boxShadow: "0px -1px 29px 1px rgb(0 0 0 / 10%)",
                        borderRadius: " 21px",
                      },
                      "&.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
                        borderRadius: "21px",
                      },
                    },
                  },
                ]}
                value="1week"
              >
                1 สัปดาห์
              </ToggleButton>
              <ToggleButton
                disableFocusRipple={true}
                disableRipple={true}
                size="small"
                sx={[
                  { border: "none", paddingX: "2rem" },
                  {
                    "&.Mui-selected": {
                      color: "#063970",
                      backgroundColor: "white",
                      borderRadius: "21px",
                      boxShadow: "0px -1px 29px 1px rgb(0 0 0 / 10%)",
                      "&.Mui-selected:hover": {
                        color: "#063970",
                        backgroundColor: "white",
                        boxShadow: "0px -1px 29px 1px rgb(0 0 0 / 10%)",
                        borderRadius: " 21px",
                      },
                      "&.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
                        borderRadius: " 21px",
                      },
                    },
                  },
                ]}
                value="1month"
              >
                1 เดือน
              </ToggleButton>
              <ToggleButton
                disableFocusRipple={true}
                disableRipple={true}
                size="small"
                sx={[
                  { border: "none", paddingX: "2rem" },
                  {
                    "&.Mui-selected": {
                      color: "#063970",
                      backgroundColor: "white",
                      borderRadius: "21px",
                      boxShadow: "0px -1px 29px 1px rgb(0 0 0 / 10%)",
                      "&.Mui-selected:hover": {
                        color: "#063970",
                        backgroundColor: "white",
                        boxShadow: "0px -1px 29px 1px rgb(0 0 0 / 10%)",
                        borderRadius: " 21px",
                      },
                      "&.MuiToggleButtonGroup-grouped:not(:first-of-type)": {
                        borderRadius: "21px",
                      },
                    },
                  },
                ]}
                value="3month"
              >
                3 เดือน
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};
