import React from 'react';
import html2canvas from 'html2canvas';


const UniversityCard = ({ university, index }) => {
  const downloadcard = async () => {
    const cardElement = document.getElementById(`card-${index}`);
    const canvas = await html2canvas(cardElement);
    const imgData = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = `university-${index}.jpeg`;
    link.click();
  };

  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{university.name}</h5>
          <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer" className="card-link">
            {university.web_pages[0]}
          </a>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary w-100" onClick={downloadcard}>Download JPEG</button>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
