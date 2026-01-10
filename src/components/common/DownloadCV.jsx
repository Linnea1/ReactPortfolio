import "./DownloadCV.css";

function DownloadCV() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/CV.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Linnea_Andersson_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <button className="download-cv-button" onClick={handleDownload}>
      <span className="button-content">
        <svg className="download-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span className="button-text">Download CV</span>
      </span>
      <span className="button-shine"></span>
    </button>
  );
}

export default DownloadCV;
