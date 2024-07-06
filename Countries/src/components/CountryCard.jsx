/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";

export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
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
