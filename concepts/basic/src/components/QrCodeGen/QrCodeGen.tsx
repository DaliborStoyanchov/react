import React, { useState } from "react";

import styles from "./QrCodeGen.module.css";
import QRCode from "react-qr-code";

const QrCodeGen = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <form className={styles.form}>
          <input
            type="text"
            name="qr-code"
            placeholder="Enter your value here"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={(e) => handleGenerateQrCode(e)}
          >
            Generate QR
          </button>
        </form>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
      </div>
    </div>
  );
};

export default QrCodeGen;
