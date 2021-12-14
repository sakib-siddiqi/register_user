import React from "react";
import { Col, Row } from "react-bootstrap";
import { ButtonPrimary } from "../../Shared/Components/Buttons";
const img_style = {
  borderRadius: "15px",
};
const RegisterOverview = () => {
  return (
    <div>
      <Row>
        <Col xs={3}>
          <img
            src="logo.png"
            alt="Codeaxes"
            className="img-fluid"
            style={img_style}
          />
        </Col>
        <Col xs={9}>
          <div className="text-white">
            <h2 className="fw-bold-sm">CODEAXES</h2>
            <p className="fw-bold-sm">DIGITAL SOLUTIONS</p>
          </div>
        </Col>
      </Row>
      <p className="lh-lg my-4 col-12 col-md-10">
        Codeaxes Digital Solutions is a multi-special internet marketing firm
        that specializes in results-oriented advertising. We assist companies in
        increasing client retention and maximizing conversion opportunities.We
        give your brand a digital success with our undivided attention and
        technical assistance.
      </p>
      <ButtonPrimary>Take a look</ButtonPrimary>
    </div>
  );
};

export default RegisterOverview;
