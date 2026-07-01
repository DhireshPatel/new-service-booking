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
      setLocation(JSON.parse(savedLocation));
      setLoading(false);
      return;
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

        const address = await reverseGeocode(lat, lng);

        const userLocation = {
          latitude: lat,
          longitude: lng,
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
        console.log(error);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      },
    );
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
