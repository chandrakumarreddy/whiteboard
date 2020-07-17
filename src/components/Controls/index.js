import React from "react";
import ColorPicker from "./ColorPicker";
import "./index.css";
import Eraser from "./Eraser";

export default function Controls({ handleColor }) {
  return (
    <div className="controls">
      <ColorPicker handleColor={handleColor} />
      <Eraser handleColor={handleColor} />
    </div>
  );
}
