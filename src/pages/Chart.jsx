import React from "react";
import ChartPluginZoom from "../components/chart/ChartPluginZoom";
import Echart from "../components/Echart";
import VictoryChart from "../components/VictoryChart";
import { Paper, Container } from "@mui/material";

const Chart = ({ data }) => {
  return (
    <>
      <Container maxWidth="sm">
        <Paper>
          <ChartPluginZoom data={data} />
          <Echart data={data} />
          <VictoryChart data={data} />
        </Paper>
      </Container>
    </>
  );
};

export default Chart;
