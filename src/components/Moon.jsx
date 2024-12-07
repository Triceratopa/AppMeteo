import React, { useState, useEffect } from "react";
import { Card, Button, Image } from "react-bootstrap";

const Moon = () => {
  const [moon, setMoon] = useState();

  const Key = "iWav0OHRKhUvrIMDFkRzzApnVrib7Ay6IDvVutGR";

  useEffect(() => {
    const fetchMoon = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${Key}`
      );
      const data = await res.json();
      console.log(data);
      setMoon(data);
    };
    fetchMoon();
  }, []);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={moon?.url}
        style={{ height: "100px", width: "100px" }}
      />
      <Card.Body>
        <Card.Title>{moon?.title}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">More details</Button>
      </Card.Body>
    </Card>
  );
};
export default Moon;
