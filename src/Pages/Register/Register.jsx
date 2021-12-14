import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
const Register = () => {
  return (
    <section id="register">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
