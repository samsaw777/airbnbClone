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

  const { latitude, longitude } = center;

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 10,
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
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#FD5B61] shadow-xl animate-bounce cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Marker>
            </div>
          );
        })}
      </Map>
    </div>
  );
};

export default MapComponent;
