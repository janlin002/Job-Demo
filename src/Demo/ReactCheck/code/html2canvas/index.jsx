import React from "react";
import html2canvas from "html2canvas";
import { Button, Typography } from "@material-ui/core";
import jsPDF from "jspdf";

const Index = () => {
  // const screenshot = () => {
  //   // Select the element that you want to capture
  //   const captureElement = document.querySelector("#capture");

  //   // Call the html2canvas function and pass the element as an argument
  //   html2canvas(captureElement).then((canvas) => {
  //     // Get the image data as a base64-encoded string
  //     const imageData = canvas.toDataURL("image/pdf");

  //     // Do something with the image data, such as saving it as a file or sending it to a server
  //     // For example, you can create an anchor element and trigger a download action
  //     const link = document.createElement("a");
  //     link.setAttribute("download", "screenshot.pdf");
  //     link.setAttribute("href", imageData);
  //     link.click();
  //   });
  // };

  const handleClick = () =>{
    html2canvas(document.querySelector("#capture")).then(canvas => {
      jsPDF.save()
    });
  }
  return (
    <>
      <div id="capture" style={{ padding: '10px', backgroundColor: '#f5da55' }}>
        <h4 style={{ color: '#000' }}>Hello world!</h4>
      </div>
      <button onClick={handleClick}>點擊</button>
    </>
    
  );
};

export default Index;
