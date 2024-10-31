import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      <div className="controls">
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>Previous</button>
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>Next</button>
      </div>
    </div>
  );
};

export default PDFViewer;
