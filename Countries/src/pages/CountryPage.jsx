import { ArrowLeft } from "react-bootstrap-icons";
import {Button, Col, Row} from "react-bootstrap"
import { useEffect, useState } from "react";
import { getData } from "../utils/fetcherAPI";
import { useNavigate } from "react-router-dom";

export default function CountryPage() {
  const [data, setData] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    getData("https://restcountries.com/v3.1/all").then((data) => {
      setData(data[30])
    });
  }, []);
  // console.log(data);


  return (
    <>
      <Button variant="outline-dark" className="backButton" onClick={()=>navigate(-1)}>
        <ArrowLeft className="arrowleft" style={{marginRight:10, transition:"none"}}/>
        Back
      </Button>
      <div className="detailContainer" >
        <img src={data.flags.png} alt="country-flag" />
        <div className="detail">
            <h3>{data.name.common}</h3>
            <Row>
              <Col>
            <span className="title">Native Name: </span><span>{Object.values(data.name.nativeName)[0].common}</span>
              </Col>
              <Col>
            <span className="title">Population: </span><span>{data.population.toLocaleString("en-US")}</span>
              </Col>
            </Row>
            <Row>
              <Col>
            <span className="title">Region: </span><span>{data.region}</span>
              </Col>
              <Col>
            <span className="title">Sub Region: </span> <span>{data.subregion}</span>
              </Col>
            </Row>
            <Row>
              <Col>
            <span className="title">Capital: </span><span>{data.capital[0]}</span>
              </Col>
              <Col>
            <span className="title">Top Level Domain: </span><span>{data.tld[0]}</span>
              </Col>
            </Row>
            <Row>
              <Col>
            <span className="title">Currencies: </span><span>{Object.values(data.currencies)[0].name}</span>
              </Col>
              <Col>
            <span className="title">Languages: </span><span>{Object.values(data.languages).join(", ")}</span>
              </Col>
            </Row>
            <div className="borders title">BorderCountries:

            </div>
        </div>
      </div>
    </>
  );
}
