import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Alert from "../components/Alert";


function Employee() {
  const [employee, setEmployee] = useState([]);
  // const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    getEmployees();
  }, []);

  function getEmployees () {
    API.getEmployees()
    .then(employee => {
      setEmployee(employee);

    })
    .catch(err => console.log(err));
}

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
            <p>employee table goes here</p>

          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Employee;