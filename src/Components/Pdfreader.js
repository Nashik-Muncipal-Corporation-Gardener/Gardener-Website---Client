import React,{useState} from 'react'
import { Document, Page } from 'react-pdf';

function Pdfreader() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
  return (
    <div>
      <Document file="https://arxiv.org/pdf/quant-ph/0410100.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default Pdfreader