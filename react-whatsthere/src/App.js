import React, { useEffect, useState } from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Planner from "./components/Planner/planner";
import DatePickerCalender from "./components/Date-Picker/Date-Picker";

import { CssBaseline, Grid } from "@mui/material";
import { getAttractions } from "./components/Map/getAttractions";

//to be moved to homepage
import jwt_decode from "jwt-decode";
// import Login from "./components/Welcome/login";

export default function App() {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    getAttractions().then((data) => {
      setAttractions(data);
      console.log(data);
    });
  }, []);

  //Login
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // response.credential is an encoded jwt
    let userObj = jwt_decode(response.credential);
    setUser(userObj); //decoded jwt object
    //If we have no user: show sign in button, else show sign out button
    document.getElementById("signInDiv").hidden = true;
  }
  function handleSignOut() {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:
        "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  
  return (
    <div className="bg-gray-300">
      <CssBaseline />
      <Grid container spacing={1.5} item xs={12}>
        <Grid className="flex-col" item xs={12} md={4}>
          <Grid className="flex-col">
            <Header />
          </Grid>
          <Grid>
            <Planner />
          </Grid>
          <Grid>
            <div>
              <div id="signInDiv"></div>
              {Object.keys(user).length != 0 && (
                <div>
                  <button onClick={(e) => handleSignOut(e)}>Sign out</button>
                </div>
              )}
            </div>
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
  );
}
