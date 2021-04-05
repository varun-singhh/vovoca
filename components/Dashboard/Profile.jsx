import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';
import { FaMusic, FaUpload } from 'react-icons/fa';
import Axios from 'axios';
import setAuthToken from '../../actions/utils/setAuthToken';
import style_modal from '../../styles/Modal.module.css';
import { Modal } from 'react-responsive-modal';
import { FaTimes } from 'react-icons/fa';
import UploadModal from './UploadModal';
const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const closeIcon = <svg style={{ display: 'none' }}></svg>;

  const authenticated = useSelector((state) => state.auth);
  const [file, setFile] = useState([]);
  console.log(file);
  const handleSubmit = (file) => {
    console.log('Upload Started...');
    const formdata = new FormData();
    formdata.append('name', 'Check');
    formdata.append('music', file);
    formdata.append('tags', 'hip-hop');

    setAuthToken(localStorage.getItem('token'));

    Axios.post('https://vovoca.herokuapp.com/api/admin', formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('Upload Ended');
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: style_modal.customOverlay,
          modal: style_modal.customModal,
        }}
        closeIcon={closeIcon}
      >
        <i style={{ color: 'gray', cursor: 'pointer' }} onClick={onCloseModal}>
          <FaTimes />
        </i>
        <UploadModal user={authenticated.data?.username} />
      </Modal>
      <h3>Hi, {authenticated.data?.username}</h3>
      <div className={style.profile_component}>
        <div style={{ display: 'flex' }}>
          <p style={{ color: 'wheat' }}>Username:</p>
          <p> &nbsp;@{authenticated.data?.username}</p>
        </div>
        <div style={{ display: 'flex' }}>
          <p style={{ color: 'wheat' }}>Email Id:</p>
          <p>&nbsp;{authenticated.data?.email}</p>
        </div>
      </div>

      <div className={style.upload_box}>
        {file.length === 0 ? (
          <>
            <FaUpload style={{ fontSize: 'xx-large' }} /> <br />
            Upload Music
            <input
              type="file"
              if="file"
              className={style.custom_file_input}
              onChange={(r) => setFile(r.target.files[0])}
            ></input>
            <div class="card-subtitle">
              Drag n Drop your file here / Click Here
            </div>
          </>
        ) : (
          <>
            <FaMusic style={{ fontSize: 'xx-large' }} /> <br />
            Music File Choosen<p>[{file.name}]</p>
            <input
              type="file"
              if="file"
              className={style.custom_file_input}
              onChange={(r) => setFile(r.target.files[0])}
            ></input>
            <div class="card-subtitle">click on Next, to get it uploaded</div>
          </>
        )}
      </div>
      {file.length === 0 ? (
        <button
          className={style.upload_button}
          disabled
          style={{ opacity: '0.5' }}
        >
          No file Chosen
        </button>
      ) : (
        <button className={style.upload_button} onClick={(r) => onOpenModal()}>
          Next
        </button>
      )}
    </div>
  );
};

export default Profile;
