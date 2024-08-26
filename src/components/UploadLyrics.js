import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';
import { Warnings } from './Warnings';

const UploadLyrics = () => {
  const [uploadStatus, setUploadStatus] = useState('');
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      await handleUpload(selectedFile);
    }
  };

  const handleUpload = async (selectedFile) => {
    if (selectedFile) {
      const storageRef = ref(storage, `uploadExample/${selectedFile.name}`);
      try {
        await uploadBytes(storageRef, selectedFile);
        console.log('Upload Complete!');
        setUploadStatus('Upload Complete!')
      } catch (error) {
        console.error('Upload failed:', error);
        setUploadStatus('Upload Failed')
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

      {uploadStatus && <Warnings uploadStatus={uploadStatus} />}
    </div>
  );
};

export default UploadLyrics;
