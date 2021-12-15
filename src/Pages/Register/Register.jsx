import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import RegisterOverview from "./RegisterOverview";
const Register = () => {
  return (
    <section id="register" className="center vh-min-100 my-5 my-md-3 my-lg-0">
      <Container className="mx-3 mx-md-0">
        <Row xs={1} md={2}>
          <Col className="bg-dark-lt py-4">
            <RegisterOverview />
          </Col>
          <Col className="bg-primary py-4">
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
