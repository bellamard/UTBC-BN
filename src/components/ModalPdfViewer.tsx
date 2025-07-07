'use client';
import { useState } from 'react';
import Modal from 'react-modal';
import PdfViewer from './PdfViewer';

Modal.setAppElement('#__next');

const ModalPdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open PDF Viewer
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} className="Modal relative max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg">
        <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-red-500">Close</button>
        <PdfViewer pdfUrl={pdfUrl} />
      </Modal>
    </>
  );
};

export default ModalPdfViewer;

