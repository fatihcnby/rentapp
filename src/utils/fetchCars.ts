import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8f2338731dmshad5eab8466f1c23p1b528fjsn439012045b95",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};
export async function fetchCars(paramsObj: FilterType): Promise<CarType[]> {
  const {
    limit = "5",
    make = "audi",
    model = "q7",
    fuel_type = "",
    year = "",
  } = paramsObj;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q7&limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;

  const response = await fetch(url, options);
  return await response.json();
}
