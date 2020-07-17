import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

function Eraser({ handleColor }) {
  function handleEraser(e) {
    e.preventDefault();
    handleColor("#ffffff");
  }

  return (
    <div className="eraser">
      <FontAwesomeIcon
        title="erase"
        icon={faEraser}
        className="fa-icon"
        onClick={handleEraser}
      />
    </div>
  );
}

export default Eraser;
