import React from "react";
import { Col, Row } from "react-bootstrap";

/*
Form Field
*/
const FromField = ({ name_id, type, field_title, ...rest }) => {
  return (
    <label htmlFor={name_id} className="w-100 mb-2">
      <p className="mb-1 text-light fw-bold-sm">{field_title}</p>
      <input
        {...rest}
        className="w-100 input_field p-2"
        type={type}
        name={name_id}
        id={name_id}
      />
    </label>
  );
};
/*
Full Form
*/
const RegisterForm = () => {
  return (
    <>
      <h3 className="fw-bold-sm mt-3 text-light">Register</h3>
      <hr />
      <form>
        <Row xs={1} md={2}>
          <Col>
            <FromField
              field_title="First name"
              type="text"
              name_id="first_name"
              placeholder="First Name"
            />
          </Col>
          <Col>
            <FromField
              field_title="Last name"
              type="text"
              name_id="last_name"
              placeholder="Last Name"
            />
          </Col>
        </Row>
        <FromField
          field_title="Email"
          type="email"
          name_id="email"
          placeholder="Email"
        />
        <Row xs={1} md={2}>
          <Col>
            <FromField
              field_title="Birthday"
              type="date"
              name_id="birthday"
              placeholder="Birthday"
            />
          </Col>
          <Col>
            <FromField
              field_title="Contact Number"
              type="number"
              name_id="contact_number"
              placeholder="Contact Number"
            />
          </Col>
        </Row>
        <FromField
          field_title="Address"
          type="text"
          name_id="address"
          placeholder="Address"
        />
        <></>
      </form>
    </>
  );
};

export default RegisterForm;
