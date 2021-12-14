import React from "react";
const commonClass = "btn px-3 rounded-0";
const ButtonPrimary = ({ children, className, ...rest }) => (
  <button {...rest} className={`${className} ${commonClass} btn-primary`}>
    {children}
  </button>
);
const ButtonDark = ({ children, className, ...rest }) => (
  <button {...rest} className={`${className} ${commonClass} btn-dark`}>
    {children}
  </button>
);
const ButtonLight = ({ children, className, ...rest }) => (
  <button {...rest} className={`${className} ${commonClass} btn-light`}>
    {children}
  </button>
);

export { ButtonPrimary, ButtonDark, ButtonLight };
