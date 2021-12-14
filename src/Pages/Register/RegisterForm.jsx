import React from "react";

/*
Form Field
*/
const FromField = ({ name_id, type, ...rest }) => {
  return (
    <label htmlFor={name_id}>
      <input {...rest} type={type} name={name_id} id={name_id} />
    </label>
  );
};
/*
Full Form
*/
const RegisterForm = () => {
  return (
    <form>
      <FromField type="text" name_id="first_name" placeholder="First Name" />
      <FromField type="text" name_id="last_name" placeholder="Last Name" />
      <FromField type="email" name_id="email" placeholder="Email" />
    </form>
  );
};

export default RegisterForm;