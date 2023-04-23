import GoogleMapReact from "google-map-react";
import { Button, Card, CardActions, Rating, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Place from "./Places";
import { correctLng } from "./correctLng";
import mapStyles from "./mapStyles";
import AttractionInfo from "./AttractionInfo";

const buttonStyles = {
  padding: 0,
};

const cardActionsStyles = {
  padding: 0,
};

export default function Map({ setCoords, setBounds, coords, attractions, setAttraction, attractionInfoShown, setAttractionInfoShown, attraction }) {

  const desktop = useMediaQuery("(min-width:600px)");

  const handleAdd = (a) => {
    const startTime = new Date(Date.now()).toLocaleString();
    const twoHours = new Date(Date.now() + 3600 * 1000 * 2).toLocaleString();
    const rating = Number(a.rating);

    setAttraction({
      name: a.name,
      address: a.address,
      city: a.address_obj.city,
      rating: rating,
      startTime: startTime,
      endTime: twoHours,
      listId: 1,
    })
  };

  const handleMore = (a) => {
    setAttraction(a);
    setAttractionInfoShown(true);
  };


  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row justify-between pl-3 pt-2 pb-2 font-bold font-mono text-base z-10 w-96">
        <div>
          <Place setCoords={setCoords} setBounds={setBounds} />
        </div>
      </div>
      <div className="z-0 absolute w-full h-screen">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
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
        >
          {attractions &&
            attractions.map((a, i) => (
              <div
                className="absolute z-10 hover:z-20 hover:scale-125"
                lat={Number(a.latitude)}
                lng={Number(a.longitude)}
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
                      {a.name}
                    </Typography>
                    <img
                      src={
                        a.photo
                          ? a.photo.images.large.url
                          : "https://www.myhometurf.com.au/wp-content/uploads/2022/05/Shadey-lawn-1536x1099.jpg"
                      }
                      alt={a.name}
                    />
                    <Rating
                      className="justify-center"
                      name="read-only"
                      size="medium"
                      precision={0.1}
                      value={Number(a.rating)}
                      readOnly
                    />
                    <CardActions
                      sx={cardActionsStyles}
                      className="flex flex-row justify-around"
                    >
                      <Button
                        sx={buttonStyles}
                        size="small"
                        onClick={() => handleAdd(a)}
                      >
                        Add
                      </Button>
                      <Button
                        size="small"
                        onClick={() => handleMore(a)}
                      >
                        More
                      </Button>
                    </CardActions>
                  </Card>
                )}
              </div>
            ))}
        </GoogleMapReact>
        {attractionInfoShown && attraction && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md w-4/5 h-4/5 overflow-y-auto">
            <AttractionInfo
              attraction={attraction}
              attractions={attractions}
              attractionInfoShown={attractionInfoShown}
              setAttractionInfoShown={setAttractionInfoShown}
            />
          </div>
        )}
      </div>
    </div>
  );
}