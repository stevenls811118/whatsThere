import React, { useEffect, useState, ReactFragment } from "react";
import { CssBaseline, Grid } from "@mui/material";
import axios from "axios";

// Components
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Planner from "./components/Planner/Planner";
import Adding from "./components/Map/Adding-Attractions";
import Alert from "./components/Map/Alert";
import CreateList from "./components/Planner/CreateList";
import UserName from "./components/Users/UserName";
import UserPic from "./components/Users/UserPic";
import LandingPage from "./components/Welcome/LandingPage";
import Logout from "./components/Users/Logout";

// Helpers / Hooks
import { getAttractions } from "./components/Map/helper/getAttractions";

// Media
import header from './images/header.jpg';




export default function App() {
  const [items, setItems] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [attraction, setAttraction] = useState("");
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [attractionInfoShown, setAttractionInfoShown] = useState(false);
  const [display, setDisplay] = useState("invisible");
  const [data, setData] = useState();

  //login states
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState(0);
  const [userPicture, setUserPicture] = useState();

  //Create-list and dropdown states
  const [showMenu, SetShowMenu] = useState();
  const [selectedList, setSelecteList] = useState();
  const [searchName, setSearchName] = useState();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setCoords({ lat: e.coords.latitude, lng: e.coords.longitude });
      setBounds({
        ne: { lat: e.coords.latitude + 0.05, lng: e.coords.longitude + 0.1 },
        sw: { lat: e.coords.latitude - 0.05, lng: e.coords.longitude - 0.1 },
      });
    });
  }, []);

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      getAttractions(bounds.ne, bounds.sw).then((data) => {
        setAttractions(data);
      });
    }
  }, [coords, bounds]);

  useEffect(() => {
    if (data) {
      axios.post("/api/attractions", data);
      axios.put("/api/attractions", {id: selectedList.id}).then((res) => {
        setItems(res.data);
      });
    }
  }, [data]);

  useEffect(() => {
    axios
      .put("/api/attractions", {id: 1})
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
      axios
        .get("/api/users")
        .then((res) => {
          const users = res.data;
          if (users.length !== 0) {
            const foundUser = users.filter((i) => i.email === userData.email);
            if (foundUser.length !== 0) {
              const ID = foundUser[0].id;
              // console.log(ID);
              setUserId(ID);
            } else {
              axios.put("/api/users", userData);
            }
          } else {
            axios.put("/api/users", userData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userData]);
  
  useEffect(() => {
    if(userId !== 0) {
      console.log(userId);
      axios.put("/api/lists", {userId}).then((res) => {
        console.log(res.data);
        setLists(res.data);
      });
    }   
  }, [userId])

  useEffect(() => {
    if(selectedList) {
      axios
      .put("/api/attractions", {id: selectedList.id})
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [selectedList])


  return (
    <React.Fragment>
      <main>
      {Object.keys(user).length === 0 && (
        <LandingPage
          user={user}
          setUser={setUser}
          userData={userData}
          setUserData={setUserData}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
          userId={userId}
          setUserId={setUserId}
        />
      )}
      {Object.keys(user).length !== 0 && (
        <>
          <CssBaseline />
            <Grid container spacing={1.5} item xs={12}>
              <Grid item xs={12} md={4} style={{height: "100%"}}>
                <div 
                  className="bg-cover bg-center" 
                  style={{ backgroundImage: `url(${header})` }}
                >
                  <div className="h-full"> 
                    <div>
                      <Header />
                    </div>
                    <div className=" flex flex-row justify-around p-2 ">
                      <div className="flex flex-col space-y-1 p-1 shadow-lg shadow-black bg-secondary/50 rounded-md">
                        <UserPic userPicture={userPicture} />
                        <Logout
                          user={user}
                          setUser={setUser}
                          setUserData={setUserData}
                          setUserPicture={setUserPicture}
                          setUserId={setUserId}
                        />
                      </div>
                      <div className="shadow-lg shadow-black bg-secondary/30 rounded">
                        <UserName userData={userData} />
                      </div>
                    </div>
                </div>


                </div>
                <CreateList userId={userId} showMenu={showMenu} SetShowMenu={SetShowMenu} selectedList={selectedList} setSelecteList={setSelecteList} searchName={searchName} setSearchName={setSearchName} lists={lists} setLists={setLists} />
                <Planner items={items} setItems={setItems} selectedList={selectedList} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Map
                  setCoords={setCoords}
                  setBounds={setBounds}
                  coords={coords}
                  attraction={attraction}
                  attractions={attractions}
                  setAttraction={setAttraction}
                  attractionInfoShown={attractionInfoShown}
                  setAttractionInfoShown={setAttractionInfoShown}
                  setDisplay={setDisplay}
                />
                <div className="flex justify-center">
                  <div className={display}>
                    <Adding
                      attraction={attraction}
                      setDisplay={setDisplay}
                      setData={setData}
                      selectedList={selectedList}
                    />
                    <Alert items={items} setItems={setItems} />
                  </div>
                </div>
              </Grid>
            </Grid>
        </>
      )}
      </main>
    </React.Fragment>
  );
}
