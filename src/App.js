import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CarsList from "./components/CarsList";
import Map from "./components/Map";
import Navigation from "./components/Navigation";
import { fetchCarsList } from "./store/cars-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsList());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <main>
        <CarsList />
        <Map />
      </main>
    </>
  );
}

export default App;
