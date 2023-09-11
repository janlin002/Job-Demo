import React from "react";
import html2canvas from "html2canvas";
import { Button, Typography } from "@material-ui/core";

const Index = () => {
  const screenshot = () => {
    // Select the element that you want to capture
    const captureElement = document.querySelector("#capture");

    // Call the html2canvas function and pass the element as an argument
    html2canvas(captureElement).then((canvas) => {
      // Get the image data as a base64-encoded string
      const imageData = canvas.toDataURL("image/pdf");

      // Do something with the image data, such as saving it as a file or sending it to a server
      // For example, you can create an anchor element and trigger a download action
      const link = document.createElement("a");
      link.setAttribute("download", "screenshot.pdf");
      link.setAttribute("href", imageData);
      link.click();
    });
  };
  return (
    <>
      <div id="capture">
        <Typography>123</Typography>
      </div>
      <Button id="btn" onClick={screenshot}>
        screen
      </Button>
    </>
  );
};

export default Index;
