import React from "react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
});

const book =
  "https://dspace.univ-guelma.dz/jspui/bitstream/123456789/10259/1/AMRANI_MOHAMMED1605663921.pdf";
view.propTypes = {};

function view() {
  // { pdfUrl }: { pdfUrl: string }
  const pdfUrl =
    "https://www.osureunion.fr/wp-content/uploads/2022/03/pdf-exemple.pdf";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">
        PDF Streaming and Manipulation
      </h1>
      <PDFViewer url={pdfUrl} />
    </div>
  );
}

export default view;
