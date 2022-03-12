import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

interface Props {
  searchList: any;
  selectedLocation: any;
  setSelectedLocation: React.Dispatch<React.SetStateAction<any>>;
}

const MapComponent = ({
  searchList,
  setSelectedLocation,
  selectedLocation,
}: Props) => {
  //get the coordinates and convert it into a center coordinate
  const coordinates = searchList.map((room: any) => ({
    latitude: room.lat,
    longitude: room.long,
  }));

  console.log(selectedLocation);
  //get the center of the coordinates.
  const center: any = getCenter(coordinates);

  const { latitude, longitude } = center;

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 10,
  });

  return (
    <div className="overflow-y-hidden absolute top-0 xl:block w-full h-[90vh]">
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
                <div
                // role="img"
                // onClick={() =>
                //   setSelectedLocation({
                //     lat: room.lat,
                //     long: room.long,
                //     index: key,
                //   })
                // }
                // aria-label="push-pin"
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
                </div>
              </Marker>
              {selectedLocation.index === key ? (
                <Popup
                  closeOnClick={true}
                  longitude={room.long}
                  latitude={room.lat}
                  focusAfterOpen={true}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    color: "white",
                  }}
                >
                  This is the Popup for this app.
                </Popup>
              ) : (
                false
              )}
            </div>
          );
        })}
      </Map>
    </div>
  );
};

export default MapComponent;
