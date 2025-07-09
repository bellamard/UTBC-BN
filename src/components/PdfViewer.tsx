"use client";

import { useEffect, useRef, useState } from "react";
import { GlobalWorkerOptions, getDocument, PDFDocumentProxy } from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker.entry";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

interface PDFViewerProps {
  url: string;
}

GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ url }: PDFViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [zoom, setZoom] = useState(1.0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [textLayerHtml, setTextLayerHtml] = useState<JSX.Element | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Charger le PDF
  // useEffect(() => {
  //   const loadPdf = async () => {
  //     const loadingTask = getDocument(url);
  //     const pdfDoc = await loadingTask.promise;
  //     setPdf(pdfDoc);
  //     setTotalPages(pdfDoc.numPages);
  //     setCurrentPage(1);
  //   };

  //   loadPdf();
  // }, [url]);

  useEffect(() => {
    const loadPdf = async () => {
      setIsLoading(true); // Début du chargement
      try {
        const loadingTask = getDocument(url);
        const pdfDoc = await loadingTask.promise;
        setPdf(pdfDoc);
        setTotalPages(pdfDoc.numPages);
        setCurrentPage(1);
      } catch (err) {
        console.error("Erreur de chargement du PDF", err);
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };

    loadPdf();
  }, [url]);

  // Rendu de la page + texte
  useEffect(() => {
    const renderPage = async () => {
      if (!pdf) return;
      const page = await pdf.getPage(currentPage);
      const viewport = page.getViewport({ scale: zoom });

      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context, viewport }).promise;

      // Rendu texte (recherche)
      const textContent = await page.getTextContent();
      const textItems = textContent.items.map((item: any, index: number) => {
        const str = item.str as string;
        const match =
          searchTerm && str.toLowerCase().includes(searchTerm.toLowerCase());

        return (
          <span
            key={index}
            style={{
              position: "absolute",
              left: `${item.transform[4] * zoom}px`,
              top: `${(viewport.height - item.transform[5]) * zoom}px`,
              fontSize: `${item.height * zoom}px`,
              backgroundColor: match ? "yellow" : "transparent",
              color: "transparent",
              whiteSpace: "pre",
              userSelect: "none",
            }}
          >
            {str}
          </span>
        );
      });

      setTextLayerHtml(
        <div className="absolute top-0 left-0 w-full h-full">{textItems}</div>
      );
    };

    renderPage();
  }, [pdf, currentPage, zoom, searchTerm]);

  // Plein écran
  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!document.fullscreenElement && el) {
      el.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/70">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative flex flex-col items-center justify-center bg-gray-200 p-4 w-full h-full"
        >
          {/* Toolbar flottante */}
          <div className="sticky top-4 right-4 z-10 bg-white/90 backdrop-blur-md border rounded-xl shadow-md flex items-center space-x-2 px-4 py-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              ◀
            </button>
            <span className="text-sm">
              Page {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              ▶
            </button>
            <div className="border-l mx-2 h-4" />
            <button
              onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))}
              className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              ➖
            </button>
            <span className="text-sm">Zoom {Math.round(zoom * 100)}%</span>
            <button
              onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
              className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              ➕
            </button>
            <div className="border-l mx-2 h-4" />
            <button
              onClick={toggleFullscreen}
              className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              {isFullscreen ? "🡼 Quitter" : "🡽 Plein écran"}
            </button>
            {/* Barre de recherche */}
            <div className="">
              <input
                type="text"
                placeholder="🔍 Rechercher"
                className="text-sm outline-none px-2 py-1 rounded border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Canvas + couche texte */}
          <div className="relative">
            <canvas ref={canvasRef} className="shadow-lg rounded border" />
            {textLayerHtml}
          </div>
        </div>
      )}
    </>
  );
}
