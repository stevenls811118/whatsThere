import React, { useCallback, useMemo, useRef, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Places from "./Places";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

const containerStyle = {
  width: "100%",
  height: "93vh",
};
const libraries = ["places"];

export default function Map() {
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 51.0447, lng: -114.0719 }), []);
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const [place, setPlace] = useState(center);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  return isLoaded ? (
    <div>
      <div className="pt-2 pb-2 font-bold font-mono text-base">
        <Places
          setPlace={(position) => {
            setPlace(position);
            mapRef.current?.panTo(position);
          }}
        />
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
        onLoad={onLoad}
      >
        {place && (
          <Marker position={place}/>
        )}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
};