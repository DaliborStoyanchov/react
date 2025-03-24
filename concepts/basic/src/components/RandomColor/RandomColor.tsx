import { useEffect, useState } from "react";
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

    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    console.log(rgbColor);

    setColor(rgbColor);
  }

  useEffect(() => {
    typeOfColor === "rgb" ? createRandomRgbColor() : createRandomHexColor();
  }, [typeOfColor]);

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "2rem",
          paddingTop: "2rem",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color:" : "HEX Color:"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
