import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import CategorySelect from "./CategorySelect";

function InputTextField({inputText, onChange}) {
return <TextField
    id="input-field"
    label="Standard"
    variant="standard"
    value={inputText}
    onChange={onChange}
  />
}

function App() {
  const [inputText, setInputText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSend = async () => {
    console.log("Sending request with:", inputText); // Debugging line
    try {
      const response = await fetch("http://localhost:8080/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputText }),
      });
      console.log("response: ", response)

      if (response.ok) {
        alert("Message sent successfully!");
        setInputText(""); // Clear input after sending
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  }
  return (
    <div>
      <h1>Users List</h1>
      <div>
      {InputTextField(
          inputText,
         (e) => setInputText(e.target.value))}
      </div>
      <CategorySelect
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div>
        <Button variant="contained" onClick={handleSend}>Send</Button>
      </div>
    </div>
    );
}

export default App;
