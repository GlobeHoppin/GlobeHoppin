import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";

function MapBox() {
  mapboxgl.accessToken = import.meta.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
  //   const [markers, setMarkers] = useState([]);
  //   const [modalInfo, setModalInfo] = useState({
  //     show: false,
  //     name: "",
  //     address: "",
  //     marker: null,
  //   });

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/aaa07/clzebw57v00bc01pr71jh4m87", // choose your map style
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
      projection: "globe",
    });
  }, []);
  return (
    <>
      <div ref={mapContainer} style={{ width: "100%", height: "600px" }} />
    </>
  );
}

export default MapBox;
