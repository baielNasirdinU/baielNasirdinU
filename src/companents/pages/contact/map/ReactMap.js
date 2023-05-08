import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  TrafficControl,
  ZoomControl,
  TypeSelector,
} from "react-yandex-map";

const ReactMap = () => {
  return (
    <YMaps>
      <div className="p-2 bg-gray-400 rounded shadow">
        <Map
          className="h-[400px] sm:w-[600px] w-[400px] border  "
          defaultState={{
            center: [42.857732, 74.682501],
            zoom: 10,
          }}
        >
          <Placemark geometry={[42.857732, 74.682501]} />
          <FullscreenControl options={{ float: "left" }} />
          <GeolocationControl
            options={{ float: "right" }}
          />
          <TrafficControl options={{ float: "right" }} />
          <ZoomControl options={{ float: "left" }} />
          <TypeSelector options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  );
};

export default ReactMap;
