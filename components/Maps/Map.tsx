import React, { useState } from "react";
import Map from "react-map-gl";
const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <div className="hidden xl:block w-full">
      <Map
        {...viewport}
        mapStyle="mapbox://styles/samsaw777/cl0l68wxw006m15o8nxdg7nni"
        mapboxAccessToken="pk.eyJ1Ijoic2Ftc2F3Nzc3IiwiYSI6ImNsMGw2NzcydTA5MmczaXFkajlsOGVqMzMifQ.Gy9yrctbtDi-wdWcPhD8Jg"
        onMove={(evt) => setViewport(evt.viewState)}
      />
    </div>
  );
};

export default MapComponent;
