import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';
import { FaMusic } from 'react-icons/fa';
import Axios from "axios"
const Profile = () => {
  const authenticated = useSelector((state) => state.auth);
  const [file, setFile] = useState([]);
  console.log(file);
  const handleSubmit=(file)=>{
    console.log("Upload Started...");
    const formdata = new FormData();
    formdata.append('name',"Check");
    formdata.append('music', file);
    formdata.append('tags', "hip-hop");
    Axios.post(
      'https://vovoca.herokuapp.com/api/admin',
      formdata,
      {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: localStorage.getItem('token'),
        },
      }
    ).then((res) => {
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    });
    console.log("Upload Ended");
  }
  return (
    <div>
      <h3>Hi, {authenticated.data.username}</h3>
      <div className={style.profile_component}>
        <span style={{ color: 'wheat' }}>Username:</span>
        <p>@{authenticated.data.username}</p>
        <span style={{ color: 'wheat' }}>Email Id:</span>
        <p>{authenticated.data.email}</p>
        <span style={{ color: 'wheat' }}>Vovoca Unique Id:</span>
        <p>{authenticated.data._id}</p>
      </div>

      <div className={style.upload_box}>
        <h4>
          <FaMusic /> &nbsp;Upload Music
        </h4>
        <input type="file" if="file" className={style.custom_file_input} onChange={(r) => setFile(r.target.files[0])}></input>
        <div class="card-subtitle">Drag n Drop your file here / Click Here</div>
      </div>
     {file.length===0?( <button className={style.upload_button} disabled style={{opacity:"0.5"}}>No file Chosen</button>):( <button className={style.upload_button}  onClick={(r) => handleSubmit(file)}>Upload Music</button>)}
    </div>
  );
};

export default Profile;
