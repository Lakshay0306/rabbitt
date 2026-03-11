import React, { useState } from "react";
import axios from "axios";

function App() {

  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    try {

      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );

      setMessage(res.data.summary);

    } catch (err) {

      setMessage("Error uploading file");

    }

  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Sales Insight Automator</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Generate Insight
      </button>

      <p>{message}</p>

    </div>
  );
}

export default App;