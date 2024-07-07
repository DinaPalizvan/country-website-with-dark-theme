import { useEffect, useState } from "react";
import { getData } from "../utils/fetcherAPI";
import CountryCard from "../components/CountryCard";
import { useSelector } from "react-redux";
import Header from "../components/Header";

export default function HomePage() {
  const searchData = useSelector((state) => state.filteredCountries.searchData);
  const selectedRegion = useSelector((state) => state.filteredCountries.region);
  const dark = useSelector((state) => state.filteredCountries.isDark);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData("https://restcountries.com/v3.1/all").then((data) => {
      let newData = data;

      if (searchData) {
        newData = newData.filter((d) =>
          d.name.common.toLowerCase().includes(searchData.toLowerCase())
        );
      }
      if (selectedRegion) {
        newData = newData.filter((d) => d.region === selectedRegion);
      }
      setData(newData);
    });
  }, [searchData, selectedRegion]);

  return (
    <>
      <Header />
      <div
        className="mainContainer"
        style={{
          backgroundColor: dark && "hsl(207, 26%, 17%)",
          color: dark && "white",
        }}
      >
        {data?.map((d, i) => {
          return (
            <CountryCard
              key={i}
              flag={d.flags.png}
              name={d.name.common}
              population={d.population.toLocaleString("en-US")}
              region={d.region}
              capital={d.capital}
              data={d}
            />
          );
        })}
      </div>
    </>
  );
}
