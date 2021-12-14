import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
const Register = () => {
  return (
    <section id="register" className="center vh-min-100">
      <Container className="vh-min-80">
        <Row xs={1} md={2} className=" vh-min-80">
          <Col className="bg-dark-lt"></Col>
          <Col className="bg-primary">
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
