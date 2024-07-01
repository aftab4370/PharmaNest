import React, { useState, useEffect } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const CustomSkinMap = withGoogleMap(() => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE`;
    script.async = true;
    script.onload = () => {
      setIsMapLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ height: "100%" }}>
      {isMapLoaded && (
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
          defaultOptions={{
            scrollwheel: false,
            zoomControl: true,
            styles: [
              // Your map styles
            ]
          }}
        >
          <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
        </GoogleMap>
      )}
    </div>
  );
});

export default function Maps() {
  return (
    <CustomSkinMap
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
