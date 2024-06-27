import { useEffect, useState } from "react";
import { getData } from "../utils/fetcherAPI";
import CountryCard from "../components/CountryCard"


export default function HomePage(){
    const [data, setData] = useState(null);
    useEffect(() => {
      getData("https://restcountries.com/v3.1/all")
      .then((data) => {
        setData(data);
      });
    }, []);
    return <>
    {/* <div className="mainContainer " > */} 
    {data?.map((d, i)=>{
        return <CountryCard 
            key={i}
            flag={d.flags.png}
            name={d.name.common}
            population={d.population.toLocaleString('en-US')}
            region={d.region}
            capital={d.capital}
        />
    })}

    {/* </div> */}

    </>
}