import React from "react";
import { Link } from "react-router-dom";
import "./CreateBtn.scss";

function CreateBtn({ value }) {
  return (
    <Link className="create-btn" to={"/create"}>
      {value}
    </Link>
  );
}

export default CreateBtn;
