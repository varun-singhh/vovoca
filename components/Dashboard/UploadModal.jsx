import React, { useState } from 'react';
import style from './UploadModal.module.css';
import { Multiselect } from 'multiselect-react-dropdown';

const UploadModal = ({ user }) => {
  const options = [
    { tag: 'Hip Hop', id: 1 },
    { tag: 'Base', id: 2 },
    { tag: 'Chill', id: 3 },
    { tag: 'beats', id: 4 },
    { tag: 'musical', id: 5 },
    { tag: 'slow', id: 6 },
    { tag: 'edm', id: 7 },
    { tag: 'electric', id: 8 },
    { tag: 'vocal', id: 9 },
    { tag: 'house', id: 10 },
  ];
  const [selectedList , setSelected] = useState([]);
  const onSelect = (selectedList , selectedItem) => {
    selectedList.push(selectedItem);
  };
  const onRemove = (selectedList , removedItem) => {
    selectedList.splice(removedItem.id, 1);
  };
  console.log(selectedList);
  return (
    <div className={style.get__in__touch__form}>
      <div className={style.form__row}>
        <h1 style={{ color: 'wheat' }}>Upload Music</h1>
        <div className={style.inputs}>
          <input
            type="text"
            placeholder="Enter Name of Music"
            className={style.feild__input}
          />
          <input
            type="text"
            value={user}
            disabled
            className={style.feild__input}
          />
          <Multiselect
            className={style.feild__input}
            options={options}
            selectedValues={selectedList}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
          />
        </div>
      </div>
      <div className={style.subscribe}>
        <button className={style.subscribe__btn}>Upload</button>
      </div>
    </div>
  );
};

export default UploadModal;
