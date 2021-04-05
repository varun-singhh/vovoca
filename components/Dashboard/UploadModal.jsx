import React from 'react';
import styles from './UploadModal.module.css';
const UploadModal = ({ user }) => {
  return (
    <div>
      <input type="text" placeholder="Enter Name of Music" />
      <input type="text" value={user} disabled />
      <select>
        <option defaultValue="Select Tags" disabled>
          Select Tags
        </option>
        <option Value="Select Tags">Hip Hop</option>
        <option Value="Select Tags">Base</option>
        <option Value="Select Tags">Chill</option>
        <option Value="Select Tags">Beats</option>
        <option Value="Select Tags">Musical</option>
        <option Value="Select Tags">Slow</option>
        <option Value="Select Tags">EDM</option>
        <option Value="Select Tags">Electric</option>
        <option Value="Select Tags">Vocal</option>
        <option Value="Select Tags">House</option>
      </select>
    </div>
  );
};

export default UploadModal;
