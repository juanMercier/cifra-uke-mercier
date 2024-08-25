import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

const UploadLyrics = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      await handleUpload(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `uploadExample/${file.name}`);
      try {
        await uploadBytes(storageRef, selectedFile);
        onUploadComplete();
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
  };

  return (
    <div>
    <input
      type="file"
      id="file-input"
      style={{ display: 'none' }}
      onChange={handleFileChange}
    />
    <button
      onClick={() => document.getElementById('file-input').click()}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        color: '#4285F4',
        border: 'none',
        cursor: 'pointer',
        fontSize: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <span style={{ fontSize: '32px' }}>+</span>
    </button>
  </div>
  );
};

export default UploadLyrics;
