/** @format */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const wordCount = name.split("").filter((word) => word !== "").length;

    if (wordCount === 7) {
      setMessage("Yes,guessed correct! You are Thala for reason");
      setImage("https://i.ytimg.com/vi/ZdLds8HwpoI/sddefault.jpg"); // No image when the word count is 7
    } else {
      setMessage("You're not a Thala for reason Moye moye😜!");
      setImage(
        "https://i.ytimg.com/vi/71qLkYv-YOQ/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAMd2bPle2IdyXRXgKsuiQualUHQg"
      );
    }
  };

  return (
    <div className="main">
      <h1>Thala for Reason 7️⃣</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
        className="input"
      />
      <button onClick={handleSubmit} className="btn">
        Check thala
      </button>
      <p className="mess">{message}</p>
      {image && (
        <img
          className="image-thala"
          src={image}
          alt="Dhoni Fan"
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
}

export default App;
