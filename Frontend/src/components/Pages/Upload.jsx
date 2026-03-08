import axios from "axios";
import { useState, useRef } from "react";

function Upload() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // ✅ Reference to the file input

  const uploadResume = async () => {
    if (!file) {
      fileInputRef.current.click(); // ✅ Open file explorer if no file selected
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://localhost:5000/api/upload/resume",
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Uploaded Successfully! ✅");
    } catch (error) {
      alert("Upload failed: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>

      {/* ✅ Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />

      {/* ✅ Single button that handles both selecting and uploading */}
      <button onClick={uploadResume}>
        {file ? "Upload Resume" : "Select Resume"}
      </button>

      {/* ✅ Show selected file name */}
      {file && <p>Selected: {file.name}</p>}
    </div>
  );
}

export default Upload;