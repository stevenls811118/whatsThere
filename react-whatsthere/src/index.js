import React from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import App from "./App";

const root = document.getElementById("root");

// Load the Google Maps API using a callback function
const loadGoogleMapsApi = (callback) => {
  const googleMapsScript = document.createElement('script');
  googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;
  googleMapsScript.defer = true;
  googleMapsScript.async = true;
  googleMapsScript.onerror = () => {
    console.error('Error loading Google Maps API');
  };
  googleMapsScript.onload = callback;
  document.body.appendChild(googleMapsScript);
};

// Add script tag for Google Sign-In API
const googleSignInScript = document.createElement('script');
googleSignInScript.src = 'https://accounts.google.com/gsi/client';
googleSignInScript.async = true;
googleSignInScript.defer = true;
document.body.appendChild(googleSignInScript);

// Wait for the Google Maps API and Google Sign-In API to load
Promise.all([
  new Promise((resolve) => {
    loadGoogleMapsApi(resolve);
  }),
  new Promise((resolve) => {
    googleSignInScript.onload = resolve;
  }),
]).then(() => {
  // Render the app once the APIs have loaded
  createRoot(root).render(<App />);
}).catch((error) => {
  console.error('Error loading Google APIs', error);
});