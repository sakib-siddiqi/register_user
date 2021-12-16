import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardLoading from "../../Shared/Components/CardLoading";
import NavBar from "../../Shared/NavBar";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://codeaxes-s15.herokuapp.com/users")
      .then((res) => res.json())
      .then((usersData) => setUsers(usersData));
  }, []);
  return (
    <section id="users">
      <Container>
        <NavBar />
        <Row xs={1} md={2} lg={3} className="g-4">
          {users.length
            ? users.map((user) => (
                <Col key={user._id}>
                  <Card className="border-0 shadow-sm text-light bg-dark-lt">
                    <Card.Body>
                      <Row className="g-3">
                        <Col xs={3}>
                          <img
                            src={`data:image/png;base64,${user.image}`}
                            alt={user.first_name}
                            className="img-fluid cover-1-1 rounded-pill border border-3 border-primary"
                            style={{
                              outline:"3px solid #4f38d9",
                              outlineOffset:"3px",
                              borderColor:"#4f38d9 !important"
                            }}
                          />
                        </Col>
                        <Col xs={9}>
                          <h4>{`${user.first_name} ${user.last_name}`}</h4>
                          <small>{user.birthday}</small>
                          <br />
                          <small>{user.address}</small>
                          <p>{user.email}</p>
                          <p>{user.contact_number}</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : [...Array(9)].map((e, i) => (
                <Col key={i}>
                  <CardLoading />
                </Col>
              ))}
        </Row>
      </Container>
    </section>
  );
};

export default User;
