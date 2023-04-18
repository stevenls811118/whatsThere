import React, { useRef, useState } from "react";

import {
  useLoadScript,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'

// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,

  Stack,
  Skeleton,
  Text,
} from '@chakra-ui/react'

import DatePicker from "../Date-Picker/Date-Picker";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faXmark, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { Icon } from "@mui/material";


const libraries = ["places"];

export default function Map() {

  const center = { lat: 51.0447, lng: -114.0719 };

  const originRef = useRef()
  const destinationRef = useRef()

  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [isShown, setIsShown] = useState(false);
  
  // const onLoad = useCallback((map) => (mapRef.current = map), []);
  // const [place, setPlace] = useState(center);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRef.current.value = ''
  }

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return isLoaded ? (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100%'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>

      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
        w='50%'
      >
        <Stack>
          <div className="flex flex-col">
            
            <Box >
              <Autocomplete>
                  <div className="flex flex-row justify-between w-[100%] p-3">
                    <div className="flex flex-row justify-center w-[20%]">
                      <FontAwesomeIcon icon={faPlaneDeparture} size="lg" /> 
                    </div>
                    <Input
                      type='text'
                      placeholder='Origin'
                      ref={originRef}
                      w="80%"
                    />
                  </div>
              </Autocomplete>
            </Box>

            <Box >
              <Autocomplete>
                <div className="flex flex-row justify-between w-[100%] p-3">
                  <div className="flex flex-row justify-center w-[20%]">
                    <FontAwesomeIcon icon={faPlaneArrival} size="lg" />
                  </div>
                  <Input
                    type='text'
                    placeholder='Destination'
                    ref={destinationRef}
                    w="80%"
                  />
                </div>
              </Autocomplete>
            </Box>

          </div>
        </Stack>

        <HStack spacing={4} mt={4} justifyContent='space-between' >
          <div className="flex flex-col p-2 ">
            <div>
              <Text>Distance: {distance} </Text>
            </div>
            <div>
              <Text>Duration: {duration} </Text>
            </div>
          </div>
        </HStack>

        <Stack spacing={4} mt={4} >
          <div className="flex flex-row justify-between">
            <div>
              <IconButton
                className="bg-gray-200 p-2 rounded-md"
                aria-label='center back'
                icon={<FontAwesomeIcon icon={faLocationDot} />}
                isRound
                onClick={() => {
                  map.panTo(center)
                  map.setZoom(15)
                }}
              />
            </div>
            <div>
              <button onClick={handleClick}>Select Days</button>
              {isShown && (<DatePicker />)}
            </div>
            <div>
              <ButtonGroup>
                <Button 
                  className="bg-tertiary text-white p-1 rounded-md"
                  type='submit'
                  onClick={calculateRoute}
                >
                Calculate Route
                </Button>

                <IconButton
                  className="bg-gray-200 p-2 rounded-md"
                  aria-label='center back'
                  icon={<FontAwesomeIcon icon={faXmark} />}
                  onClick={clearRoute}
                />
              </ButtonGroup>
            </div>
          </div>
        </Stack>

      </Box>
    </Flex>
  ) : (
    <Skeleton />
  );
};