import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { getProfileFromSessionStorage } from "../services/utils";

function MapBox() {
  mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [user] = useState(getProfileFromSessionStorage());
  // The following values can be changed to control rotation speed:

  // At low zooms, complete a revolution every two minutes.
  const secondsPerRevolution = 240
  // Above zoom level 5, do not rotate.
  const maxSpinZoom = 5
  // Rotate at intermediate speeds between zoom levels 3 and 5.
  const slowSpinZoom = 3

  let userInteracting = false
  const spinEnabled = true

  useEffect(() => {

    if (map.current) return // initialize map only once

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/aaa07/clzebw57v00bc01pr71jh4m87", // choose your map style
        // make this configurable based on user's location
        center: [77.1025, 20.5937], // starting position [lng, lat]
        zoom: 1.5, // starting zoom
        projection: "globe",
      });
    } else {
      console.error('mapContainer.current is not defined')
    }

    function spinGlobe() {
      const zoom = map.current?.getZoom()
      if (spinEnabled && !userInteracting && (zoom ?? 0) < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution
        if ((zoom ?? 0) > slowSpinZoom) {
          // Slow spinning at higher zooms
          const zoomDif = (maxSpinZoom - (zoom ?? 0)) / (maxSpinZoom - slowSpinZoom)
          distancePerSecond *= zoomDif
        }
        const center = map.current?.getCenter()
        if (center) {
          center.lng -= distancePerSecond
        }
        // Smoothly animate the map over one second.
        // When this animation is complete, it calls a 'moveend' event.
        map.current?.easeTo({ center, duration: 5000, easing: (n) => n * 5 })
      }

      // Pause spinning on interaction
      map.current?.on('mousedown', () => {
        userInteracting = true
      })
      map.current?.on('dragstart', () => {
        userInteracting = true
      })
    }

    if (window.innerWidth >= 1024) {
      // When animation is complete, start spinning if there is no ongoing interaction
      map.current?.on('moveend', () => {
        spinGlobe()
      })
    }

    spinGlobe()

    // Create a default Marker, colored black, rotated 45 degrees.
    if (map.current) {
      user?.pins && user?.pins.map((place) => {
        const lng = place.longitude;
        const lat = place.latitude;
        return new mapboxgl.Marker({ color: place.color })
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3 style="color: black;">${place.title}</h3>`
            )
          )
          .addTo(map.current)
      })
    }

    return () => {
      map.current?.off('moveend', spinGlobe)
    }

  }, []);
  return (
    <>
      <div ref={mapContainer} style={{ width: "100%", height: "600px" }} />
    </>
  );
}

export default MapBox;
