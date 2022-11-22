import "./App.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { PageTitle } from './components/PageTitle';
import { SearchBar } from './components/SearchBar';
import { BondChart } from './components/BondChart';
import { LineChart } from './components/LineChart';
import { Overall } from './components/Overall';
import { BondDetail } from './components/BondDetail';
import { useEffect } from "react";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  useEffect(() => {
    document.title = "Chart components demostration";
  }, []);
  const { isLoading, isError, data, isFetched } = useFetchData();
  if (isLoading) {
    console.log("Data is loading...");
  } else if (isError) {
    console.log("Data fetching error....");
  } else if (isFetched) {
    console.log("Data fetched successfuly");
  }
  return (
    <Container maxWidth="sm" sx={{ padding: 0 }}>
      <PageTitle/>
      <Box sx={{ bgcolor: "#F5f5f5", height: "full", paddingX: "1rem" }}>
        <SearchBar />
        <BondChart />
        <LineChart />
        <Overall />
        <BondDetail />
      </Box>
    </Container>
  );
}

export default App;
