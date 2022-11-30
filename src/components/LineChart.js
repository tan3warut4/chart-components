import React, { useState } from "react";
import {
  Paper,
  Container,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import Echart from "./chart/Echart";

export const LineChart = () => {
  const [timeSelect, setTimeSelect] = useState("oneMonth");

  const handleTimeSelect = (_event, updateFormats) => {
    if (updateFormats != null) {
      setTimeSelect(updateFormats);
    }
  }
 const restoreChart = ()=>{
  setTimeSelect("oneMonth")
 }

  return (
    <>
      <Container maxWidth="sm" sx={{ padding: 0 }}>
        <Paper sx={{ marginY: "1rem", padding: "1rem" }}>
        <Echart timeSelect={timeSelect} handleRestore={restoreChart} />
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
                value="oneWeek"
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
                value="oneMonth"
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
                value="threeMonth"
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
