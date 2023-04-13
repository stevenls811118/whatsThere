import React from "react";
import Console from "./components/Console/Console";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Planner from "./components/Planner/planner";
import { CssBaseline, Grid } from "@mui/material";
const App = () => {

  return (
    <div>
      <CssBaseline />
      <Grid container spacing={1.5} style={{ width: "100%"}}>
        <Grid direction="column" item xs={12} md={4}>  
          <Grid item xs={12} md={4}>
            <Header />
            <Planner />
          </Grid>
          <Grid item xs={12} md={4} style={{background: "lightblue"}}>
            <Console />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  )
};

export default App;