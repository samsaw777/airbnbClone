import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const MapComponent = ({ searchList }: any) => {
  //get the coordinates and convert it into a center coordinate
  const coordinates = searchList.map((room: any) => ({
    latitude: room.lat,
    longitude: room.long,
  }));

  //get the center of the coordinates.
  const center: any = getCenter(coordinates);

  console.log(center);
  const { latitude, longitude } = center;

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 8,
  });

  return (
    <div className="overflow-hidden hidden xl:block w-full z-40">
      <Map
        {...viewport}
        mapStyle="mapbox://styles/samsaw777/cl0l68wxw006m15o8nxdg7nni"
        mapboxAccessToken="pk.eyJ1Ijoic2Ftc2F3Nzc3IiwiYSI6ImNsMGw2NzcydTA5MmczaXFkajlsOGVqMzMifQ.Gy9yrctbtDi-wdWcPhD8Jg"
        onMove={(evt) => setViewport(evt.viewState)}
      >
        {searchList.map((room: any, key: number) => {
          return (
            <div key={key}>
              <Marker
                longitude={room.long}
                latitude={room.lat}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  willChange: "transform",
                }}
              ></Marker>
            </div>
          );
        })}
      </Map>
    </div>
  );
};

export default MapComponent;
