import { colors } from "../constants";
import { CarType } from "../types";

const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split("/")[0]);
  url.searchParams.append("zoomtype", "fulscreen");

 
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  
  const i = Math.floor(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return url.href;
};

export default generateImage;
