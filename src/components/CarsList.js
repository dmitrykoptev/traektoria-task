import React from "react";
import { useSelector } from "react-redux";
import CarItem from "./CarItem";
import classes from "./CarsList.module.css";

const CarsList = () => {
  let cars = useSelector((state) => state.cars.carsList);

  return (
    <div className={classes.container}>
      <div className={classes.dopContainer}>
        <ul className={classes.listContainer}>
          {cars.map((car) => (
            <li key={car.id} id={car.id}>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarsList;
