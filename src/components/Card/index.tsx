import { motion } from "framer-motion";
import { CarType } from "../../types";
import Button from "../Button";
import generateImage from "../../utils/generateImage";
import { useState } from "react";
import Modal from "../Modal";

interface CardProps {
  car: CarType;
}

const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const translate = {
    rwd: "Arkadan İtişli",
    fwd: "Önden Çekişli",
    awd: "4 Çeker",
    "4wd": "4 Çeker",
  };

  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      <div className="flex mt-6 text-[32px]">
        <span className="font-semibold text-[19px]">₺</span>
        {Math.round(Math.random() * 7000) + 1500}
        <span className="self-end font-semibold text-[19px]">/günlük</span>
      </div>
      <div className="relative w-full h-40 my-3">
        <img
          className="w-full h-full object-contain"
          src={generateImage(car)}
          alt=""
        />
      </div>

      <div className="w-full mt-2 flex">
        <div className="group-hover:hidden flex w-full justify-between">
          <div className="flex-center flex-col">
            <img src="/steering-wheel.svg" alt="" width={25} />
            <p>{car.transmission === "a" ? "Otomatik" : "Düz Vites"}</p>
          </div>
          <div className="flex-center flex-col">
            <img width={25} src="/tire.svg" />
            <p>{translate[car.drive]}</p>
          </div>
          <div className="flex-center flex-col">
            <img src="/gas.svg" alt="" width={25} />
            <p>{car.fuel_type}</p>
          </div>
        </div>
        <div className="w-full hidden group-hover:flex">
          <Button
            title="Daha Fazla Bilgi"
            designs="w-full py-[16px]"
            icon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} car={car} />
    </motion.div>
  );
};

export default Card;
