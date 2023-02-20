import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import classes from "./Map.module.css";

const Map = () => {
  const cars = useSelector((state) => state.cars.carsList);

  return (
    <div>
      <MapContainer
        center={[59.9375, 30.308611]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cars?.map((car) => (
          <Marker
            key={car.id}
            id={car.id}
            position={[car.latitude, car.longitude]}
          >
            <Popup>
              <span className={classes.spanName}>
                {car.name} {car.model}
              </span>
              <div className={classes.priceContainer}>
                <span className={classes.spanPrice}>${car.price}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
