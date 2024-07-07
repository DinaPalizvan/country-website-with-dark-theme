import { ArrowLeft } from "react-bootstrap-icons";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BorderCountries from "../components/BorderCountries";

export default function CountryPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;
  const dark = useSelector((state) => state.filteredCountries.isDark);

  return (
    <>
      <div
        className="countryPage"
        style={{
          backgroundColor: dark && "hsl(207, 26%, 17%)",
          color: dark && "white",
        }}
      >
        <Button
          variant="outline-dark"
          className="backButton"
          onClick={() => navigate(-1)}
          style={{
            boxShadow: dark
              ? "0 0 10px 0 hsl(210, 26%, 13%)"
              : "0 0 10px 0 lightGray",
            backgroundColor: dark && "hsl(209, 23%, 22%)",
            color: dark && "white",
          }}
        >
          <ArrowLeft
            className="arrowleft"
            style={{ marginRight: 10, transition: "none" }}
          />
          Back
        </Button>
        <div className="detailContainer">
            <img src={data.flags.png} alt="country-flag" />
          <div className="detail">
            <h3>{data.name.common}</h3>
            <Row>
              {data.name.nativeName && (
                <Col>
                  <span className="title">Native Name: </span>
                  <span>{Object.values(data.name.nativeName)[0].common}</span>
                </Col>
              )}
              {data.population && (
                <Col>
                  <span className="title">Population: </span>
                  <span>{data.population.toLocaleString("en-US")}</span>
                </Col>
              )}
            </Row>
            <Row>
              {data.region && (
                <Col>
                  <span className="title">Region: </span>
                  <span>{data.region}</span>
                </Col>
              )}
              {data.subregion && (
                <Col>
                  <span className="title">Sub Region: </span>{" "}
                  <span>{data.subregion}</span>
                </Col>
              )}
            </Row>
            <Row>
              {data.capital && (
                <Col>
                  <span className="title">Capital: </span>
                  <span>{data.capital[0]}</span>
                </Col>
              )}
              {data.tld && (
                <Col>
                  <span className="title">Top Level Domain: </span>
                  <span>{data.tld[0]}</span>
                </Col>
              )}
            </Row>
            <Row>
              {data.currencies && (
                <Col>
                  <span className="title">Currencies: </span>
                  <span>{Object.values(data.currencies)[0].name}</span>
                </Col>
              )}
              {data.languages && (
                <Col>
                  <span className="title">Languages: </span>
                  <span>{Object.values(data.languages).join(", ")}</span>
                </Col>
              )}
            </Row>
            {data.borders &&(
              <div className="borders title">BorderCountries: 
              {data.borders.map((cca3, i)=>{
                return <BorderCountries key={i} code={cca3}/>
              })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
