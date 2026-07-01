//Ye file poori website ki location manage karegi.

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { reverseGeocode } from "@/utils/reverseGeocode";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    const savedLocation = localStorage.getItem("userLocation");

    // Agar location pehle se saved hai
    if (savedLocation) {
      try {
        setLocation(JSON.parse(savedLocation));
        setLoading(false);
        return;
      } catch {
        localStorage.removeItem("userLocation");
      }
    }

    // Browser support check
    if (!navigator.geolocation) {
      alert("Your browser doesn't support location.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        console.log("Latitude:", lat);
        console.log("Longitude:", lng);
        console.log("Accuracy:", position.coords.accuracy);

        const address = await reverseGeocode(lat, lng);

        const userLocation = {
          latitude: lat,
          longitude: lng,
          accuracy: position.coords.accuracy,
          city: address.city,
          state: address.state,
          pincode: address.pincode,
          address: address.address,
        };

        localStorage.setItem("userLocation", JSON.stringify(userLocation));

        setLocation(userLocation);
        setLoading(false);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Location permission denied.");
            break;

          case error.POSITION_UNAVAILABLE:
            alert("Location unavailable.");
            break;

          case error.TIMEOUT:
            alert("Location request timed out.");
            break;

          default:
            alert("Unable to fetch location.");
        }
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  const updateLocation = (newLocation) => {
    localStorage.setItem("userLocation", JSON.stringify(newLocation));

    setLocation(newLocation);
  };

  const refreshLocation = () => {
    localStorage.removeItem("userLocation");
    getUserLocation();
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
        getUserLocation,
        updateLocation,
        refreshLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
