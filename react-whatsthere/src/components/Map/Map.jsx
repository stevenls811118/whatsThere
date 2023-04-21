import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Rating, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Place from "./Places";
import { correctLng } from "./correctLng";

const mapContainer = {
  width: "100%",
  height: "93vh",
};

export default function Map({ setCoords, setBounds, coords, attractions }) {
  const desktop = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <div className="flex flex-row justify-between pt-2 pb-2 font-bold font-mono text-base">
        <div>
          <Place setCoords={setCoords} setBounds={setBounds} />
        </div>
      </div>
      <div style={mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
          }}
          defaultCenter={{ lat: 51.0447, lng: -114.0719 }}
          center={coords}
          defaultZoom={13}
          margin={[30, 30, 30, 30]}
          options={""}
          onChange={(e) => {
            if (e.marginBounds.ne.lng <= 180 && e.marginBounds.sw.lng >= -180) {
              setCoords({ lat: e.center.lat, lng: e.center.lng });
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            } else {
              const { centerLng, neLng, swLng } = correctLng(
                e.center.lng,
                e.marginBounds.ne.lng,
                e.marginBounds.sw.lng
              );

              setCoords({ lat: e.center.lat, lng: centerLng });
              setBounds({
                ne: { lat: e.marginBounds.ne.lat, lng: neLng },
                sw: { lat: e.marginBounds.sw.lat, lng: swLng },
              });
            }
          }}
          onChildClick={(e) => {}}
        >
          {attractions &&
            attractions.map((attraction, i) => (
              <div
                className="absolute z-10 hover:z-20 hover:scale-150 hover:translate-x-1/4 hover:-translate-y-1/4"
                lat={Number(attraction.latitude)}
                lng={Number(attraction.longitude)}
                key={i}
              >
                {!desktop ? (
                  <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) : (
                  <Paper elevation={3} className="p-1 flex flex-col justify-center cursor-pointer w-28">
                    <Typography variant="subtitle2" gutterBottom>
                      {attraction.name}
                    </Typography>
                    <img
                      src={
                        attraction.photo
                          ? attraction.photo.images.large.url
                          : "https://www.myhometurf.com.au/wp-content/uploads/2022/05/Shadey-lawn-1536x1099.jpg"
                      }
                      alt={attraction.name}
                    />
                    <Rating
                      className="justify-center mt-0.5"
                      name="read-only"
                      size="small"
                      precision={0.1}
                      value={Number(attraction.rating)}
                      readOnly
                    />
                  </Paper>
                )}
              </div>
            ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}
