import React, { useContext } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { MapContext } from "../../containers/MapContainer";


const MapComponent = () => {
  const { viewport, cycleData, handleViewportChange, handleClickOnMap} = useContext(MapContext);
  

  return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://styles/sowmyam14/ckg0u5md32jul19pq2ovufsdi"
        onClick={(e) => handleClickOnMap(e)}
      >
        <Source id="cyclepath-data" type="geojson" data={cycleData}>
         <Layer
            id="cyclepath-data"
            type="circle"
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
