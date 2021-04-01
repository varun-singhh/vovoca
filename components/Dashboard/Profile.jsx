import React from 'react';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';
import { FaMusic } from 'react-icons/fa';
const Profile = () => {
  const authenticated = useSelector((state) => state.auth);
  return (
    <div>
      <h3>Hi, {authenticated.data.username}</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          color: 'gray',
        }}
      >
        <p><span style={{color:"wheat"}}>Username:</span> &nbsp;@{authenticated.data.username}</p>
        <p>Email Id: &nbsp;{authenticated.data.email}</p>
        <p>
          <b>Vovoca Id: &nbsp;</b>
          {authenticated.data._id}
        </p>
      </div>
      
      <div className={style.upload_box}>
      <h4><FaMusic/> &nbsp;Upload Music</h4>
        <input type="file" className={style.custom_file_input}></input>
        <div class="card-subtitle">Drag n Drop your file here / Click Here</div>
      </div>
      <button className={style.upload_button}>Upload</button>
    </div>
  );
};

export default Profile;
