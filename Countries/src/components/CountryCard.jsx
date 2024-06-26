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
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
