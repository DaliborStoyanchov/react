import { useState } from "react";
import classes from "./RandomColor.module.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function createRandomHexColor() {
    console.log("Random HEX color is being created...");

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);

    setColor(hexColor);
  }

  function createRandomRgbColor() {
    console.log("Random RGB color is being created...");
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
      }}
      className={classes.container}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? createRandomHexColor : createRandomRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}
