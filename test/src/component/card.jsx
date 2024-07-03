import React from 'react'

const card = (props) => {
    

    const handleDownloadImage =async () => {
        const element = document.getElementById('print'),
        canvas = await html2canvas(element),
        data = canvas.toDataURL('image/jpg'),
        link = document.createElement('a');
    
        link.href = data;
        link.download = 'downloaded-image.jpg';
    
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div>
    <div id="print"><span>{props.country}</span>
    <span>{props.state}</span></div>
      

      <button type="button" onClick={handleImageDownload}>Download</button>
    </div>
  )
}

export default card;