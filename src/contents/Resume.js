import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Loader from "react-loader-spinner";
export default function Resume(props) {
    const [numPages, setNumPages] = useState(null);
    const [loading,setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show first page

    function onDocumentLoadSuccess({ numPages }) {
        setLoading(false)
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const { pdf } = props;

    return (
        <div id="ResumeContainer">
            <Document
                className={"PDFDocument"}
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={loading} //3 secs
                  />}
                >
                <Page
                    className={"PDFPage PDFPageOne"}
                    pageNumber={pageNumber}
                />
            </Document>

            <p>
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <div className="inline-flex">
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}>
                    Prev
                </button>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
}
