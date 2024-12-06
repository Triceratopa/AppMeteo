import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  InputGroup,
  Form,
  Button,
  CardText,
  Image,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Weather = () => {
  const [search, setSearch] = useState("monselice");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const icon = data.weather?.[0]?.icon;

  const fetchWeather = async () => {
    setLoad(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=01ca7539f92093d34f474faa866c7269`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log("Errore fetch", error);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Card className="bg-dark text-white text-center">
              <Card.Img src=" https://placecats.com/300/400" alt="Card image" />
              <Card.ImgOverlay>
                <InputGroup type="search" className="mb-4 w-75 mx-auto ">
                  <Form.Control
                    placeholder="Search City..."
                    aria-label="Search City..."
                    aria-describedby="basic-addon2"
                    value={search}
                    onChange={handleSearch}
                  />
                  <Button
                    type="submit"
                    className="input-group-text"
                    id="basic-addon2"
                    onClick={fetchWeather}
                  >
                    <i className="bi bi-search-heart"></i>
                  </Button>
                </InputGroup>
                <div className="bg-dark bg-opacity-50 py-3">
                  {load ? (
                    <>
                      <Card.Title className="h1">{data.name}</Card.Title>
                      <Card.Text className="h6">
                        {new Date().toLocaleDateString()}
                      </Card.Text>
                      <hr />
                      <CardText className="d-flex justify-content-center">
                        <Image
                          src={`http://openweathermap.org/img/wn/${icon}.png`}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </CardText>
                      <CardText>{data.weather?.[0]?.main}</CardText>

                      <CardText>{data.main?.temp?.toFixed()} °C</CardText>
                      <CardText>
                        {data.main?.temp_min?.toFixed()} °C |{" "}
                        {data.main?.temp_max?.toFixed()} °C
                      </CardText>

                      <CardText>
                        {data.main?.pressure}km/h{" "}
                        <i className="bi bi-water"></i> |{" "}
                        <i className="bi bi-wind"></i> {data.main?.humidity}%
                      </CardText>
                      <CardText></CardText>
                    </>
                  ) : (
                    <Card.Title className="h2">Not Found</Card.Title>
                  )}
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
