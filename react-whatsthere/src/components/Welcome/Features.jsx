import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faBook, faBell } from "@fortawesome/free-solid-svg-icons";
import logo2 from "../../images/logo2.png";

export default function Features() {
  return (
    <div className=" flex flex-col justify-center items-center absolute top-[5%] left-[10%] h-[70%] w-[80%] z-10 pl-4 ">
      <div>
        <img
          src={logo2}
          alt="logo"
          className="h-64 m-3 bg-black/20 rounded-lg"
        />
      </div>
      <div className="h-full w-full flex flex-col bg-black/30 rounded-md">
        <div>
          <h1 className="text-5xl font-bold text-center text-white p-4 space-y-2 bg-black/60 rounded-md font-mono ">
            Features
          </h1>
        </div>
        <div className="w-full h-full">
          <section className="flex flex-row justify-around p-2 text-white space-x-6 text-center h-full">
            <article className="flex flex-col justify-start p-4 space-y-2 bg-black/60 rounded-lg w-1/3 h-full ">
              <div>
                <h1 className="text-center text-xl font-bold pb-1 underline font-mono">
                  Interactive Map and Attractions
                </h1>
                <FontAwesomeIcon icon={faMap} size="lg" />
              </div>
              <div>
                <div>
                  <p className=" text-lg font-semibold italic p-2">
                    ~ Trip Planning made fun! ~
                  </p>
                  <p className=" text-lg  p-2">
                    Easily navigate and discover top-rated nearby attractions.
                    Attraction cards which can be added to the planner are
                    displayed on the map including photos, a small description
                    and ratings.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col justify-start items-center p-4 space-y-2 bg-black/60 rounded-lg w-1/3 h-full ">
              <div>
                <h1 className="text-center text-xl font-bold pb-1 underline font-mono">
                  Plan Multiple Trips
                </h1>
                <FontAwesomeIcon icon={faBook} size="lg" />
              </div>
              <div>
                <div>
                  <p className=" text-lg italic p-2 font-semibold h-full">
                    ~ Multiple trips coming up? No problem! ~
                  </p>
                  <p className=" text-lg p-2 h-full">
                    WhatsThere? allows users to create and save multiple trips
                    to their profile, with a drop down menu to easily select a
                    trip and edit upcoming visits to attractions.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col justify-start items-center p-4 space-y-2 bg-black/60 rounded-lg w-1/3 h-full">
              <div>
                <h1 className="text-center text-xl font-bold pb-1 underline font-mono">
                  Visit Alerts
                </h1>
                <FontAwesomeIcon icon={faBell} size="lg" />
              </div>
              <div>
                <div>
                  <p className=" text-lg italic font-semibold p-2 h-full">
                    ~ Never miss a visit! ~
                  </p>
                  <p className=" text-lg p-2 h-full">
                    Once a trip is planned, Whats there will send you reminders
                    when you have an upcoming visit to an attraction.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
