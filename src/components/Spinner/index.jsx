import React from "react";
import { Spinner as SpinnerBS } from "react-bootstrap";

import "./style.scss";

function Spinner() {
  return (
    <div className="spinner">
      <SpinnerBS animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </SpinnerBS>
    </div>
  );
}

export default Spinner;
