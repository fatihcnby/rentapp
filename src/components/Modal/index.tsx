import { CarType } from "../../types";
import generateImage from "../../utils/generateImage";

type ModalProps = {
  car: CarType;
  isOpen: boolean;
  close: () => void;
};

const Modal = ({ car, isOpen, close }: ModalProps) => {
  console.log(Object.entries(car));
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 grid place-items-center">
          <div className="relative bg-white p-6 max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
            <button
              onClick={close}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="close" />
            </button>

            <div className="flex-1 flex flex-col gap-3">
              <div className="w-full h-40 bg-pattern bg-center rounded-lg">
                <img
                  className="h-full mx-auto object-contain"
                  src={generateImage(car)}
                  alt="car"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain min-w-[146px]"
                    src={generateImage(car, "29")}
                    alt="car"
                  />
                </div>
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain min-w-[146px]"
                    src={generateImage(car, "33")}
                    alt="car"
                  />
                </div>
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain min-w-[146px]"
                    src={generateImage(car, "13")}
                    alt="car"
                  />
                </div>
              </div>
            </div>

            {Object.entries(car).map(([key, value]) => (
              <div className="flex justify-between">
                <h4 className="capitalize text-black">{key.split("_").join(" ")}</h4>
                <p className="capitalize text-black-100 font-semibold">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
