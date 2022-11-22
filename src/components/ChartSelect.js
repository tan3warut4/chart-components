import { React, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const ChartSelect = ({ chartDisplay, setChartDisplay }) => {
  const [timeSelect, setTimeSelect] = useState("1Month");
  const handleChartSelect = (_event, updateFormats) => {
    setChartDisplay(updateFormats);
    console.log(updateFormats);
  };

  return (
    <Stack
      direction="row"
      sx={{ marginTop: "0.5rem", justifyContent: "center",martginBottom:"0.5rem" }}
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
        value={chartDisplay}
        onChange={handleChartSelect}
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
          value="chartjs"
        >
          ChartJS
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
          value="victory"
        >
          Victory
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
          value="echart"
        >
          Echart
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default ChartSelect;
