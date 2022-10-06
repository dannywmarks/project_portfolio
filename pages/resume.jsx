import React from "react";
import { pdfjs, Document, Page } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resume = () => {
  return (
    <div></div>
  );
};

export default resume;
