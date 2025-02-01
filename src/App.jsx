import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    github: "",
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: [],
    socials: [],
  });

  // Handles input changes for basic fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to add new items
  const addItem = (key, item) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: [...prevData[key], item],
    }));
  };

  return (
    <div className="bg-blue-50 h-[100vh] flex flex-row justify-between">
      <Editor
        formData={formData}
        handleInputChange={handleInputChange}
        addItem={addItem}
      />
      <Preview formData={formData} />
    </div>
  );
};

export default App;
