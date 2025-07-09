import React from "react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
});

view.propTypes = {};

function view() {
  // { pdfUrl }: { pdfUrl: string }
  const pdfUrl = encodeURIComponent(
    "https://www.carepatron.com/files/mood-and-affect-list.pdf"
  );
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <PDFViewer url={`/api/proxy?url=${pdfUrl}`} />
    </div>
  );
}

export default view;
