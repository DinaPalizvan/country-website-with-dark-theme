/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getData } from "../utils/fetcherAPI";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function BorderCountries({ code }) {
//   console.log(code);
  const [data, setData] = useState(null);
  const dark = useSelector((state) => state.filteredCountries.isDark);

  useEffect(() => {
    getData(`https://restcountries.com/v3.1/alpha/${code}`).then((dataa) => {
      setData(dataa);
    });
  }, [code]);

  return (
    <>
      {data ? (
        <Button
        className="borderbtn"
          as={Link}
          variant="outline-dark"
          to={`/country/${data[0].name.common}`}
          state={data[0]}
            style={{
              boxShadow: dark
                ? "0 0 10px 0 hsl(210, 26%, 13%)"
                : "0 0 10px 0 lightGray",
              backgroundColor: dark && "hsl(209, 23%, 22%)",
              color: dark && "white",
            }}
        >
          {data[0]?.name?.common}
        </Button>
      ) : null}
    </>
  );
}
