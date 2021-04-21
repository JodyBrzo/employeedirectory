import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Table from "../components/Table";

function Employee() {
  const [employees, setEmployees] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'name.first',
            filter: 'text'
          },
          {
            Header: 'Last Name',
            accessor: 'name.last',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Phone',
            accessor: 'cell',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Years Employeed',
            accessor: 'registered.age',
          },
          {
            Header: 'Location',
            accessor: 'location.city',
          },
        ],
      },
    ],
    []
  )


  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    getEmployees();
  }, []);

  function getEmployees () {
    API.getEmployees()
    .then(result => {
      setEmployees(result.data.results);
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
          <h1>Global Company Search Directory</h1>
          <span>Click a column name to display sort indicator.  Filtering can be done on any column.</span>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {console.log('employees = ', employees)}
            <Table columns={columns} data={employees} />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Employee;