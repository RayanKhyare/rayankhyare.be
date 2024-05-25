"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // import the mapbox library
import "mapbox-gl/dist/mapbox-gl.css"; // import the mapbox styles
import { useTheme } from "next-themes";
import "./map.scss"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN; // set the access token

export default function Map({ lng, lat, zoom = 2.5, pitch = 25 , height = "235px"}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
  

    useEffect(() => {
      if (map.current) return;
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        center: [lng, lat],
        zoom: zoom,
        pitch: pitch,
      });

      let mapTheme;
      mapTheme = "night";
  
  
      // set config properties
      map.current.on("style.load", () => {
        map.current.setConfigProperty("basemap", "lightPreset", mapTheme);
        map.current.setPadding({ left: 150 });
  
        const el = document.createElement("span");
        el.className = "map-marker";
  
        new mapboxgl.Marker({ element: el })
          .setLngLat([lng, lat])
          .addTo(map.current);
      });
    });
  
    return (
      <div
        className="overflow-clip rounded-xl border border-secondary"
        style={{ height: height }}
      >
        <div ref={mapContainer} className="map-container h-full w-full"/>
      </div>
    );
  }