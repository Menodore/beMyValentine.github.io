import React, { useState } from "react";
import "./App.css";

function App() {
  const [yesButtons, setYesButtons] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleNoClick = () => {
    const newYesButton = {
      id: yesButtons.length + 1,
      left: Math.random() * 80 + "vw",
      top: Math.random() * 80 + "vh",
    };
    setYesButtons([...yesButtons, newYesButton]);
  };

  const handleYesClick = () => {
    setShowThankYou(true);
  };

  return (
    <div className="container">
      {showThankYou ? (
        <div>
          <img src="/thank-you.jpg" alt="Thank you!" width="200" />
          <h2>Thank You! ❤️</h2>
        </div>
      ) : (
        <div>
          <img src="/vivek.png" alt="Will you be my Valentine?" width="200" />
          <h2>Will you be my Valentine?</h2>
          <div className="buttons">
            <button className="yes-btn" onClick={handleYesClick}>Yes</button>
            <button className="no-btn" onClick={handleNoClick}>No</button>
          </div>
        </div>
      )}

      {yesButtons.map((btn) => (
        <button
          key={btn.id}
          className="yes-btn"
          style={{
            position: "absolute",
            left: btn.left,
            top: btn.top,
          }}
          onClick={handleYesClick}
        >
          Yes
        </button>
      ))}
    </div>
  );
}

export default App;
