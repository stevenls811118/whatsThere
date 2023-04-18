import React from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Planner from "./components/Planner/planner";

import { CssBaseline, Grid } from "@mui/material";

export default function App() {

  return (
    <div className="bg-gray-300">
      <CssBaseline />
      <Grid container spacing={1.5} item xs={12}>
        <Grid className="flex-col" item xs={12} md={4}>  
          <Grid className="flex-col">
            <Header  />
          </Grid>
          <Grid>
            <Planner />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  )
};