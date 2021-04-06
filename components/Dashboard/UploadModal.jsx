import React, { useState } from 'react';
import style from './UploadModal.module.css';
import Axios from 'axios';
import setAuthToken from '../../actions/utils/setAuthToken';
import cookie from 'js-cookie';
import { toast } from 'react-toastify';
import { AiFillTag } from 'react-icons/ai';

const UploadModal = ({ user, file }) => {
  const [musicName, setName] = useState('');
  const [tags, setTags] = useState([]);
  const check = () => {
    console.log(tags, musicName);
  };
  const handleSubmit = async () => {
    try {
      console.log('Upload Started...');
      let formdata = new FormData();
      formdata.append('name', musicName);
      formdata.append('music', file);
      formdata.append('tags', JSON.stringify(tags));

      setAuthToken(cookie.get('token'));

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const res = await Axios.post(
        'https://vovoca.herokuapp.com/api/admin',
        formdata,
        config
      );
      if (res.status === 200) toast.success('Music Uploaded');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  return (
    <div>
      <div className={style.form__row}>
        <h2 style={{ color: 'wheat' }}>Upload Music</h2>
        <div className={style.inputs}>
          <input
            type="text"
            value={musicName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name of Music"
          />
          {/* <input type="text" value={user} disabled /> */}
          {tags.length >= 5 ? (
            <></>
          ) : (
            <select className={style.options}>
              <option default>Select 5 Tags</option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="hip-hop"
              >
                Hip Hop
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="base"
              >
                Base
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="chill"
              >
                Chill
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="beats"
              >
                Beats
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="musical"
              >
                Musical
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="slow"
              >
                Slow
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="edm"
              >
                EDM
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="electric"
              >
                Electric
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="vocal"
              >
                Vocal
              </option>
              <option
                onClick={(e) => setTags([...tags, e.target.value])}
                value="house"
              >
                House
              </option>
            </select>
          )}
        </div>
      </div>
      <div className={style.subscribe}>
        <button onClick={() => check()} className={style.subscribe__btn}>
          Upload
        </button>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {tags.map((res) => (
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'wheat',
                marginTop: '25px',
                marginRight: '10px',
              }}
            >
              <AiFillTag />
              &nbsp;S
              {res}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
