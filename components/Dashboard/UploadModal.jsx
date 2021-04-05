import React from 'react';
import style from './UploadModal.module.css';
const UploadModal = ({ user }) => {
  return (
    <div>
      <div className={style.form__row}>
        <h1 style={{ color: 'wheat' }}>Login</h1>
        <div className={style.inputs}>
          <input type="text" placeholder="Enter Name of Music" />
          <input type="text" value={user} disabled />
          <select>
            <option default>
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
      </div>
      <div className={style.subscribe}>
        <button className={style.subscribe__btn}>Upload</button>
      </div>
    </div>
  );
};

export default UploadModal;
