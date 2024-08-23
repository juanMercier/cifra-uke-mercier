import { PDFDocument } from 'pdf-lib';

export const convertPdfToImages = async (pdfUrl) => {
  try {
    const response = await fetch(pdfUrl, { mode: 'no-cors' });

    console.log({response: response})

    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType !== "application/pdf") {
      throw new Error("Fetched content is not a PDF");
    }

    const pdfBytes = await response.arrayBuffer();

    console.log({pdfBytes: pdfBytes})
    const pdfDoc = await PDFDocument.load(pdfBytes);

    console.log({pdfDoc: pdfDoc})
    const imageUrls = [];
    const numPages = pdfDoc.getPageCount();

    for (let i = 0; i < numPages; i++) {
      const page = pdfDoc.getPage(i);

      // Create a PNG image from the page
      const scale = 2; // adjust the scale for higher quality images
      const pngImage = await page.render({ scale }).toDataURL('image/png');

      imageUrls.push(pngImage);
    }

    return imageUrls;
  } catch (error) {
    console.error('Error converting PDF to images:', error);
    throw error;
  }
};
