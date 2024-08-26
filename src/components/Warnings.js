import React from 'react';
import '../styles.css';

export const Warnings = ({ uploadStatus }) => {

  return (
    uploadStatus && (
      <div 
      className='fade-out'
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '20px',
        backgroundColor: '#4285F4',
        color: '#fff',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        {uploadStatus}
      </div>
    )
  );
};

export default Warnings;
