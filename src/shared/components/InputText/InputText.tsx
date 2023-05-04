import React from "react";
import "./InputText.scss";

interface Props {
  placeholder?: string;
  value?: string;
}

const InputText = ({ placeholder, value }: Props) => {
  return (
    <>
      <input placeholder={placeholder} value={value} />
    </>
  );
};

export default InputText;
