// src/utils/fetchFiles.js
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export const fetchFilesFromStorage = async () => {
  try {
    const listRef = ref(storage, 'lyrics'); // Replace with the actual folder name
    const res = await listAll(listRef);

    const files = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return {
          name: changeFileName(itemRef.name),
          url,
        };
      })
    );

    return files;
  } catch (error) {
    console.error("Error fetching files from Firebase Storage:", error);
    return [];
  }
};


function changeFileName(filename){
    const regex = /^\d+\s*/;
    const result = filename.replace(regex, '');
    return result.split('.').slice(0, -1).join('.');
}