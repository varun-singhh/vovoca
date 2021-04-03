import React from 'react';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';
import { FaMusic } from 'react-icons/fa';
const Profile = () => {
  const authenticated = useSelector((state) => state.auth);
  return (
    <div>
      <h3>Hi, {authenticated.data.username}</h3>
      <div className={style.profile_component}>
        <span style={{ color: 'wheat', marginLeft: '25px' }}>Username:</span>
        <p style={{marginLeft: '10px'}}>@{authenticated.data.username}</p>
        <span style={{ color: 'wheat', marginLeft: '25px' }}>Email Id:</span>
        <p style={{marginLeft: '10px'}}>{authenticated.data.email}</p>
      </div>

      <div className={style.upload_box}>
        <h4>
          <FaMusic /> &nbsp;Upload Music
        </h4>
        <input type="file" className={style.custom_file_input}></input>
        <div>Drag n Drop your file here / Click Here</div>
      </div>
      <button className={style.upload_button}>Upload</button>
    </div>
  );
};

export default Profile;
