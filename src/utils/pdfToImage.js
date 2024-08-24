import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

GlobalWorkerOptions.workerSrc = pdfjsWorker;
export const convertPdfToImages = async (pdfUrl) => {
    try {
        
        const pdf = await getDocument(pdfUrl).promise;
        const numPages = pdf.numPages;
        const imageUrls = [];

        for (let i = 1; i <= numPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 2 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };

            await page.render(renderContext).promise;
            const imageUrl = canvas.toDataURL('image/png');
            imageUrls.push(imageUrl);
        }

        return imageUrls;
    }
    catch (error) {
        console.error('Error converting PDF to image:', error);
        throw error;
    }
};