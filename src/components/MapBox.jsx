import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { getProfileFromSessionStorage } from "../services/utils";

function MapBox() {
  mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [user] = useState(getProfileFromSessionStorage());

  useEffect(() => {

    if (map.current) return // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/aaa07/clzebw57v00bc01pr71jh4m87", // choose your map style
      // make this configurable based on user's location
      center: [77.1025, 20.5937], // starting position [lng, lat]
      zoom: 1.5, // starting zoom
      projection: "globe",
    });

    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
        map.current.setFog({}); // Set the default atmosphere style
    });

    // The following values can be changed to control rotation speed:

    // At low zooms, complete a revolution every two minutes.
    const secondsPerRevolution = 240;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;

    let userInteracting = false;
    const spinEnabled = true;

    function spinGlobe() {
        const zoom = map.current.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
            let distancePerSecond = 360 / secondsPerRevolution;
            if (zoom > slowSpinZoom) {
                // Slow spinning at higher zooms
                const zoomDif =
                    (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                distancePerSecond *= zoomDif;
            }
            const center = map.current.getCenter();
            center.lng -= distancePerSecond;
            // Smoothly animate the map over one second.
            // When this animation is complete, it calls a 'moveend' event.
            map.current.easeTo({ center, duration: 1000, easing: (n) => n });
        }
    }

    // Pause spinning on interaction
    map.current.on('mousedown', () => {
        userInteracting = true;
    });
    map.current.on('dragstart', () => {
        userInteracting = true;
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.current.on('moveend', () => {
        spinGlobe();
    });

    spinGlobe();

    // Create a default Marker, colored black, rotated 45 degrees.
    if (map.current) {
      user?.pins && user?.pins.map((place) => {
        const lng = place.latitude;
        const lat = place.longitude;
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
