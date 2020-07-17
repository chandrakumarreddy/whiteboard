import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import Controls from "../Controls";

export default function Board() {
  const canvasRef = useRef(null);
  const boardRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const [drawing, setDrawing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ctx, setCtx] = useState({});
  useEffect(() => {
    let canv = canvasRef.current;
    let canvCtx = canv.getContext("2d");
    canv.width = boardRef.current.offsetWidth;
    canv.height = boardRef.current.offsetHeight;
    canvCtx.lineJoin = "round";
    canvCtx.lineCap = "round";
    canvCtx.lineWidth = 5;
    setCtx(canvCtx);
    const offset = canv.getBoundingClientRect();
    setCanvasOffset({ x: parseInt(offset.left), y: parseInt(offset.top) });
  }, [ctx]);
  function handleMouseDown(e) {
    setDrawing(true);
    setPosition({
      x: e.clientX - canvasOffset.x,
      y: e.clientY - canvasOffset.y,
    });
  }
  function handleMouseMove(e) {
    let mousex = e.clientX - canvasOffset.x;
    let mousey = e.clientY - canvasOffset.y;

    if (drawing) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(position.x, position.y);
      ctx.lineTo(mousex, mousey);
      ctx.stroke();
    }
    setPosition({ x: mousex, y: mousey });
  }
  function handleMouseUp() {
    setDrawing(false);
  }
  return (
    <div className="board" ref={boardRef}>
      <Controls handleColor={setColor} />
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
}
