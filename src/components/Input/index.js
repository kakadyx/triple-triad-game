import React from "react";

const Input = ({ type, id, name, required, value }) => {
  return (
    <input type={type} value={value} id={id} name={name} required={required} />
  );
};

export default Input;
