import React from "react";
import { Button } from "react-bootstrap";

const ButtonPrimary = ({ children, className, ...rest }) => (
  <Button {...rest} className={`${className} btn-primary`}>
    {children}
  </Button>
);
const ButtonDark = ({ children, className, ...rest }) => (
  <Button {...rest} className={`${className} btn-dark`}>
    {children}
  </Button>
);
const ButtonLight = ({ children, className, ...rest }) => (
  <Button {...rest} className={`${className} btn-light`}>
    {children}
  </Button>
);

export { ButtonPrimary, ButtonDark, ButtonLight };
