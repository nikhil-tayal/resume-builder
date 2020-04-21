import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function InputLabel(props) {
  let { className, onChange, value, name, placeholder } = props;
  return (
    <TextareaAutosize
      className={`${className} input-generic`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
