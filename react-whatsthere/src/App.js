import React, { useEffect, useState } from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Planner from "./components/Planner/planner";
import DatePickerCalender from "./components/Date-Picker/Date-Picker";

import { CssBaseline, Grid } from "@mui/material";
import { getAttractions } from "./components/Map/getAttractions";

//to be moved to homepage 
import Login from "./components/Welcome/login";

export default function App() {

  const [attractions, setAttractions] = useState([]);
  function handleCallbackResponses(response) {
    
  }

  useEffect(() => {
    getAttractions()
    .then(data => {
      setAttractions(data);
      console.log(data);
    })
  }, [])

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id: "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com",
      callback: handleCallbackResponses,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
    }, [])
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
          {/* if not logged in, show login component, else show users name*/}
          <Grid>
            <Login/>
          </Grid>
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