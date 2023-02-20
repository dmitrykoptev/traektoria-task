import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { carsActions } from "../store/cars";
import classes from "./CarItem.module.css";
import { GrMapLocation } from "react-icons/gr";

const CarItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, model, year, color, price } = props.car;
  const [carName, setCarName] = useState(name);
  const [carModel, setCarModel] = useState(model);
  const [carPrice, setCarPrice] = useState(`$${price}`);

  const deleteCar = () => {
    dispatch(carsActions.deleteCar(id));
  };

  return (
    <div className={classes.cardContainer}>
      <div className={classes.btnDelete} onClick={deleteCar}>
        {" "}
      </div>
      <div className={classes.carMark}>
        <input
          className={classes.mark}
          type="text"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
        />
        <input
          className={classes.model}
          type="text"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
      </div>
      <div className={classes.carInfo}>
        <p>
          <span>Color:</span>
          <br /> {color}
        </p>
        {/* <GrMapLocation className={classes.iconLocation} /> */}
        <p>
          <span>Year:</span>
          <br /> {year}
        </p>
      </div>
      <input
        className={classes.price}
        type="text"
        value={carPrice}
        onChange={(e) => setCarPrice(e.target.value)}
      />
    </div>
  );
};

export default CarItem;
