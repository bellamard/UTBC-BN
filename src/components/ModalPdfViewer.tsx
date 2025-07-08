'use client';
import { useState } from 'react';



const ModalPdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open PDF Viewer
      </button>
      
    </>
  );
};

export default ModalPdfViewer;

