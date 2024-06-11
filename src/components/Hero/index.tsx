import Button from "../Button";
import { motion } from "framer-motion";

type HeroProps = {
  element: React.RefObject<HTMLDivElement>;
};

const Hero = ({ element }: HeroProps) => {
  const scroll = () => {
    element.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title">
          İhtiyacınıza Uygun Araçlar, Uygun Fiyatlarla
        </h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          suscipit optio voluptates molestias sit atque eius facere labore.
        </p>
        <Button title="Araç Seçenekleri" designs="mt-10" handleClick={scroll} />
      </div>
      <div className="hero__image-container flex justify-center">
        <div className="hero__image">
          <motion.img
            initial={{
              translateX: 400,
              scale: 0.5,
            }}
            animate={{
              translateX: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            src="/hero.png"
            alt="car"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
