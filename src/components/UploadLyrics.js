import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

const UploadLyrics = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `lyrics/${file.name}`);
      await uploadBytes(storageRef, file);
      onUploadComplete();
    }
  };

  return (
    <div className="upload-lyrics">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadLyrics;
