import axios from "axios";

const GeneraterLog = () => {
  
      const handleGenerateAndDownloadLog = async () => {
    try {
      const response = await axios.get("https://logparserbackend-1.onrender.com/generate-log", {
        responseType: "blob", 
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "logger.log");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating or downloading the log file:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Log File Generator</h1>
      <button onClick={handleGenerateAndDownloadLog}>Generate Log File</button>
    </div>
  );

}

export default GeneraterLog;
