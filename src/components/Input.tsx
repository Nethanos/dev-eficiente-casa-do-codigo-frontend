import React from "react";

type InputProps = {
  label: string;
  placeholder?: string;
  type?: string
  id?: string
};

export const Input = (props: InputProps) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type || "text"}
        className="form-control"
        id={props.id || Math.random().toString()}
        placeholder={props.placeholder}
      ></input>
    </>
  );
};
