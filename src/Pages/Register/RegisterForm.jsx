import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { ButtonDark } from "../../Shared/Components/Buttons";

/*
Form Field
*/
const FromField = ({ name_id, type, field_title, className, ...rest }) => {
  return (
    <label htmlFor={name_id} className="w-100 mb-2">
      <p className="mb-1 text-light fw-bold-sm">{field_title}</p>
      <input
        {...rest}
        required
        className={`w-100 input_field p-2 ${className}`}
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
  const defaultUserData = {
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    birthday: "",
    address: "",
  };
  const [userData, setUserData] = useState(defaultUserData);
  const handleinput = (e) => {
    const newData = { ...userData };
    newData[e.target.name] = e.target.value;
    setUserData(newData);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    if (userData.image.size > 524288) {
      alert("Maximum file size is 500kb !");
    } else {
      const formData = new FormData();
      for (let filed in userData) {
        formData.append(filed, userData[filed]);
      }
      const postUserData = fetch("https://codeaxes-s15.herokuapp.com/users", {
        method: "POST",
        body: formData,
      });
      toast
        .promise(postUserData, {
          pending: "wait...",
          success: "Registered.",
          error: "Try again.",
        })
        .then((res) => res.json())
        .then((data) => data.acknowledge && e.target.reset());
    }
  };
  return (
    <>
      <h3 className="fw-bold-sm mt-3 text-light">Register</h3>
      <hr />
      <form onSubmit={handleSumbit}>
        <Row xs={1} md={1} lg={2}>
          <Col>
            <FromField
              minLength={2}
              field_title="First name"
              type="text"
              name_id="first_name"
              placeholder="First Name"
              onBlur={handleinput}
            />
          </Col>
          <Col>
            <FromField
              minLength={2}
              field_title="Last name"
              type="text"
              name_id="last_name"
              placeholder="Last Name"
              onBlur={handleinput}
            />
          </Col>
        </Row>
        <FromField
          field_title="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          name_id="email"
          placeholder="Email"
          onBlur={handleinput}
        />
        <Row xs={1} md={1} lg={2}>
          <Col>
            <FromField
              field_title="Birthday"
              type="date"
              name_id="birthday"
              placeholder="Birthday"
              onBlur={handleinput}
            />
          </Col>
          <Col>
            <FromField
              minLength={10}
              field_title="Contact Number"
              type="tell"
              name_id="contact_number"
              placeholder="Contact Number"
              onBlur={handleinput}
            />
          </Col>
        </Row>
        <FromField
          field_title="Address"
          type="text"
          name_id="address"
          placeholder="Address"
          onBlur={handleinput}
        />
        <FromField
          field_title="Image"
          type="file"
          name_id="image"
          placeholder="Image"
          accept="image/png"
          onBlur={(e) => {
            const newData = {
              ...userData,
              image: e.target.files[0],
            };
            setUserData(newData);
          }}
        ></FromField>
        <ButtonDark type="submit" className="mt-4">
          Signup
        </ButtonDark>
      </form>
    </>
  );
};

export default RegisterForm;
