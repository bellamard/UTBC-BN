import React from 'react';
import ModalPdfViewer from '@/components/ModalPdfViewer';


const book = 'https://dspace.univ-guelma.dz/jspui/bitstream/123456789/10259/1/AMRANI_MOHAMMED1605663921.pdf';
view.propTypes = {

};

function view(
    // { pdfUrl }: { pdfUrl: string }
) {


    const pdfUrl = 'https://www.osureunion.fr/wp-content/uploads/2022/03/pdf-exemple.pdf'; // Remplacez par l'URL de votre PDF distant

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-8">PDF Streaming and Manipulation</h1>
            
        </div>
    );
}

export default view;