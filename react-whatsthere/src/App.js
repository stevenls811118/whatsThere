import React, { useEffect, useState } from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Planner from "./components/Planner/planner";
import DatePickerCalender from "./components/Date-Picker/Date-Picker";

import { CssBaseline, Grid } from "@mui/material";
import { getAttractions } from "./components/Map/getAttractions";

//to be moved to homepage 
import Login from "./components/Welcome/login";
import Logout from "./components/Welcome/logout";
// import {useEffect} from 'react';
import { gapi } from 'gapi-script';
const clientId = "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com"



export default function App() {

  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    getAttractions()
    .then(data => {
      setAttractions(data);
      console.log(data);
    })
  }, [])

  useEffect(() => {
    function start(){
      gapi.client.init({
        client_id: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })

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
          <Grid>
            <Login/>
          </Grid>
          {/* <Grid>
            <Logout/>
          </Grid> */}
          <Grid className="flex-col">
            {/* <Console /> */}
            <DatePickerCalender />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  )
};