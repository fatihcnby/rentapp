import { useSearchParams } from "react-router-dom";
import Button from "../Button";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  const limit = Number(params.get("limit")) || 5;

  const increaseLimit = () => {

    const newLimit = limit + 5;

   
    params.set("limit", String(newLimit));

  
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && <Button title="Daha Fazla" handleClick={increaseLimit} />}
    </div>
  );
};

export default ShowMore;
