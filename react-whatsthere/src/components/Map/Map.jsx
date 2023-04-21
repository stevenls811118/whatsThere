import React from "react";
import GoogleMapReact from "google-map-react";
import { Button, Card, CardActions, Rating, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Place from "./Places";
import { correctLng } from "./correctLng";
import mapStyles from "./mapStyles";

const buttonStyles = {
  padding: 0,
};

const cardActionsStyles = {
  padding: 0,
};

export default function Map({ setCoords, setBounds, coords, attractions }) {
  const desktop = useMediaQuery("(min-width:600px)");

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row justify-between pl-3 pt-2 pb-2 font-bold font-mono text-base z-10">
        <div>
          <Place setCoords={setCoords} setBounds={setBounds} />
        </div>
      </div>
      <div className="z-0 absolute w-full h-screen">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            // clickableIcons: false,
          }}
          defaultCenter={{ lat: 51.0447, lng: -114.0719 }}
          center={coords}
          defaultZoom={13}
          options={{
            clickableIcons: false,
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,
          }}
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
                className="absolute z-10 hover:z-20 hover:scale-125 hover:translate-x-1/4 hover:-translate-y-1/4"
                lat={Number(attraction.latitude)}
                lng={Number(attraction.longitude)}
                key={i}
              >
                {!desktop ? (
                  <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) : (
                  <Card
                    elevation={3}
                    className="w-40 p-1 flex flex-col cursor-pointer"
                  >
                    <Typography variant="subtitle2">
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
                      className="justify-center"
                      name="read-only"
                      size="medium"
                      precision={0.1}
                      value={Number(attraction.rating)}
                      readOnly
                    />
                    <CardActions
                      sx={cardActionsStyles}
                      className="flex flex-row justify-around"
                    >
                      <Button
                        sx={buttonStyles}
                        size="small"
                        onClick={() =>
                          console.log({
                            name: attraction.name,
                            address: attraction.address,
                            city: attraction.address_obj.city,
                            rating: attraction.rating,
                          })
                        }
                      >
                        Add
                      </Button>
                      <Button
                        size="small"
                        onClick={() => {
                          console.log({ attractions });
                          console.log(attraction);
                          if (attraction.description) {
                            console.log({
                              description: attraction.description,
                              ranking: attraction.ranking_subcategory,
                            });
                          } else {
                            console.log({
                              description: attraction.name,
                              ranking: attraction.ranking_subcategory,
                            });
                          }
                        }}
                      >
                        More
                      </Button>
                    </CardActions>
                  </Card>
                )}
              </div>
            ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}
