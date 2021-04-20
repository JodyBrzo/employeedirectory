import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/Huyuoy1.jpg">
        <h1>Employee Directory</h1>
        <h2>World Headquarters</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Employees Sorted By Last Name</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p> table goes here</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
