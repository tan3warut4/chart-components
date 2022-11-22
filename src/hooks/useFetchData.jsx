import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchChartData = () => {
  return axios.get("http://localhost:4000/chart");
};

export const useFetchData = () => {
  return useQuery(['chartData'], fetchChartData);
};
