import React, { Component } from "react";
import API from "../utils/API";
import Alert from "../components/Alert";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


class Employee extends Component {
  // state = {
  //   image: "",
  //   match: false,
  //   matchCount: 0
  // };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees()
      .then(res =>
        // this.setState({
        //   image: res.data.message
        // })
        console.log(res)
      )
      .catch(err => console.log(err));
  };

  render() {
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
}

export default Employee;