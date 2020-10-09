import React, { useContext } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { MapContext } from "../../containers/MapContainer";


const MapComponent = () => {
  const {
    viewport,
    cycleData,
    handleViewportChange,
    handleClickOnMap,
  } = useContext(MapContext);
  const mapStyle = "mapbox://styles/sowmyam14/ckg0u5md32jul19pq2ovufsdi";

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={handleViewportChange}
      mapStyle={mapStyle}
      onClick={(e) => handleClickOnMap(e)}
    >
      <Source id="cyclepath-data" type="geojson" data={cycleData}>
        <Layer
          id="cyclepath-data"
          type="circle"
          source="cyclepath-data"
          paint={{
            "circle-radius": 3,
            "circle-color": "#007cbf",
          }}
        ></Layer>
      </Source>
    </ReactMapGL>
  );
};

export default MapComponent;
