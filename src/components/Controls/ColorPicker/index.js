import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const popover = {
  position: "absolute",
  zIndex: "2",
};
const cover = {
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
};

export default function ColorPicker({ handleColor }) {
  const [color, setColor] = useState("#000000");
  const [displayed, setDisplayed] = useState(false);
  function handleOpen() {
    setDisplayed(true);
  }
  function handleClose() {
    setDisplayed(false);
  }
  function handleColorChange(pickerColor) {
    setColor(pickerColor.hex);
    handleColor(pickerColor.hex);
  }
  return (
    <div className="colorPicker">
      <FontAwesomeIcon
        title="choose color"
        className="fa-icon"
        icon={faPalette}
        onClick={handleOpen}
      />
      {displayed && (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
}
