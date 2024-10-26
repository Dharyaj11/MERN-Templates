import React from "react";
import {  Link } from "react-router-dom"; // Import necessary components from react-router-dom
import { Button } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import CardComponent from "./cardComponent";
import { apicalldata, designdata } from "../data";

function Home() {
  return (
    <div className="App">
      <Container className="gap-5">
        <Row>
          <Link to="/design">
            <Button
              variant="primary"
              size="lg"
              style={{ fontSize: "40px", width: "100%" }}
            >
              Design Templates
            </Button>
          </Link>
        </Row>
        <Container className="mt-4">
          <Row>
            {designdata.map((card) => (
              <Link
                to={`/design/${card.urlTerm}`}
                style={{ textDecoration: "none" }}
                key={card.id}
              >
                <CardComponent title={card.title} text={card.description} />
              </Link>
            ))}
          </Row>
        </Container>
        <Row>
          <Link to="/apicall">
            <Button
              variant="primary"
              size="lg"
              style={{ fontSize: "40px", width: "100%" }}
            >
              API Calls Templates
            </Button>
          </Link>
        </Row>
        <Container className="mt-4">
          <Row>
            {apicalldata.map((card) => (
              <Link
                to={`/apicall/${card.urlTerm}`}
                style={{ textDecoration: "none" }}
                key={card.id}
              >
                <CardComponent
                  key={card.id}
                  title={card.title}
                  text={card.description}
                />
              </Link>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
