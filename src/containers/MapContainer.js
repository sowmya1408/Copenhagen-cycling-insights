import React, { useState, useEffect, createContext } from "react";
import MapComponent from "../components/MapComponent/MapComponent";
import { useHistory } from "react-router-dom";

export const MapContext = createContext();

const MapContainer = () => {
  const history = useHistory();
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    zoom: 12,
    latitude: 55.685,
    longitude: 12.565,
  });
  const [cycleData, setCycleData] = useState(null);

  useEffect(() => {
    const fetchCycleData = async () => {
      try {
        const getCycleData = await fetch(
          "https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:cykeldata_kk&outputFormat=json&SRSNAME=EPSG:4326"
        );
        const getCycleDataInJson = await getCycleData.json();
        setCycleData(getCycleDataInJson);
      } catch (err) {
        return `Error: ${err}`;
      }
    };
    fetchCycleData();
  }, []);
  const handleViewportChange = (viewport) => setViewport(viewport);
  const handleClickOnMap = (event) => {
    console.log(event);
    history.push(`/weather-timeChart/${event.lngLat[1]}/${event.lngLat[0]}`);
  };
  return (
    <MapContext.Provider
      value={{
        viewport,
        cycleData,
        handleViewportChange,
        handleClickOnMap,
      }}
    >
     <MapComponent />
    </MapContext.Provider>
  );
};

export default MapContainer;
