import { carsActions } from "./cars";

export const fetchCarsList = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("https://test.tspb.su/test-task/vehicles");

      if (!response.ok) {
        throw new Error("Something went wrong ...");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cars = await sendRequest();
      dispatch(
        carsActions.replaceCars({
          cars: cars || [],
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };
};
