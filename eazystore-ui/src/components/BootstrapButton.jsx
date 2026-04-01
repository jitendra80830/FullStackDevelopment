import React from "react";

function BootstrapButton({ text, type }) {
  return <button className={`btn btn-${type}`}>{text}</button>;
}

export default BootstrapButton;
