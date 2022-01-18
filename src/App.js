import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import List from "./Components/List/List";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <PlaceDetails />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default App;
