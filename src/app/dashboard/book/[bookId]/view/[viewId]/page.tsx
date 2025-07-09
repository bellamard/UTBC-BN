import React from "react";
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@/components/PdfViewer'), { ssr: false });


view.propTypes = {};

function view() {
  // { pdfUrl }: { pdfUrl: string }
  const pdfUrl =
    "https://media.pt-numerique.gouv.cd/app/uploads/2024/10/Charte-graphique-du-gouvernement-de-la-RDC_compressed.pdf";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">
       lecture PDF
      </h1>
      <PDFViewer url="/pdfs/MDBK00103.pdf" />
    </div>
  );
}

export default view;
