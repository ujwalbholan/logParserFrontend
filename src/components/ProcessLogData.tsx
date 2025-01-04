import React, { useState } from "react";
import axios from "axios";

const ProcessLogData = () => {
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<any[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    try {
      const text = await file.text();
      const logLines = text.split("\n");
      const logJson = logLines.map((line, index) => ({
        id: index + 1,
        log: line.trim(),
      }));

      const response = await axios.post("http://localhost:8080/process-logs", logJson);

      if (response.data.errors) {
        setErrors(response.data.errors);
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parse your log file</h1>
      <input type="file" accept=".log" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload and Analyze</button>
      <div>
        {errors.length > 0 && (
          <div>
            <h2>Logs Alart:</h2>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>
                  <strong>Timestamp:</strong> {error.timestamp} -{" "}
                  <strong>Message:</strong> {error.message}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessLogData;
