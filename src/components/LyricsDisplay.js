import React, { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

const SideBar = ({ onSelectFile }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const storageRef = ref(storage, 'lyrics/');
      const result = await listAll(storageRef);
      const fileUrls = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return { name: item.name, url };
        })
      );
      setFiles(fileUrls);
    };

    fetchFiles();
  }, []);

  return (
    <div className="sidebar">
      <button onClick={() => onSelectFile(null)}>Upload New</button>
      <ul>
        {files.map((file) => (
          <li key={file.name} onClick={() => onSelectFile(file.url)}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
