import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Nav from "../Nav/Nav";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Planner from "../Planner/planner";

import { CssBaseline, Grid } from "@mui/material";
import { getAttractions } from "../Map/getAttractions";




export default function Dashboard() {

  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    getAttractions()
      .then(data => {
        setAttractions(data);
        console.log(data);
      })
  }, [])

  const GapiFunction = dynamic(() => import("../Gapi/GapiFunction"), { ssr: false });

  return (
    <div className="bg-gray-300">
      <CssBaseline />
      <Grid container spacing={1.5} item xs={12}>
        <Grid className="flex-col" item xs={12} md={4}>
          <Grid className="flex-col">
            <Nav className="flex flex-row"/>
            <Header />
          </Grid>
          <Grid>
            <Planner />
          </Grid>
          {/* if not logged in, show login component, else show users name*/}
          <Grid>
          </Grid>
          <Grid className="flex-col">
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  )
};