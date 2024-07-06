/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}) {
  const dark= useSelector(state=>state.filteredCountries.isDark)

  return (
    <>
      <Card style={{ width: "18rem", boxShadow: dark&& "0 0 10px 0 hsl(210, 26%, 13%)", backgroundColor: dark&& "hsl(209, 23%, 22%)", color: dark&& "white" }}>
        <Card.Img variant="top" src={flag} style={{ height: 170 }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text> */}
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          {capital ? (
            <p>
              Capital: <span>{capital}</span>
            </p>
          ) : (
            <p>
              <br />
            </p>
          )}
          {/* </Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
}
