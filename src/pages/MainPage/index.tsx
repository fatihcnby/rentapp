import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";
import { useEffect, useRef, useState } from "react";
import { fetchCars } from "../../utils/fetchCars";
import { CarType } from "../../types";
import Card from "../../components/Card";
import ShowMore from "../../components/ShowMore/index.tsx";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../../constants.ts";
import Footer from "../../components/Footer/index.tsx";




const MainPage = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const catalogRef = useRef<HTMLDivElement>(null);
  const [params] = useSearchParams();
  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());
    fetchCars(paramsObj)
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [params]);
  return (
    <div className="mb-40">
      <Hero element={catalogRef} />
      <div ref={catalogRef} className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araç Kataloğumuz</h1>
        </div>
        <p>İhtiyacınız Olan Her Türlü Araç Stoklarımızda</p>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <Filter paramName="fuel_type" data={fuels} />
            <Filter paramName="year" data={years} />
          </div>
        </div>

        {!cars ? (
          <div className="warn-container">
            <h2>Araçlar Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="warn-container">
            <h2>Araç verileriyle ilgili bir hata oluştu...</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="warn-container">
            <h2>Girilen kritere uygun araç bulunamadı...</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>

            <ShowMore />
         
          </section>
          
        )}
        
        <Footer/>
      </div>
      
    </div>
    
  );
};

export default MainPage;
