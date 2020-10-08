import React, { useContext } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { MapContext } from "../../containers/MapContainer";

const MapComponent = () => {
  const { viewport, cycleData, handleViewportChange } = useContext(MapContext);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://styles/sowmyam14/ckg0u5md32jul19pq2ovufsdi"
      >
        <Source type="geojson" data={cycleData}>
          <Layer
            id="point"
            type="circle"
            paint={{
              "circle-radius": 3,
              "circle-color": "#007cbf",
            }}
          />
        </Source>
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;
