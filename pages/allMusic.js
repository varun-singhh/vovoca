import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusic } from "../actions/musicActions";
import style from "../styles/AllMusic.module.css";
import Footer from "../components/homepage/Footer/Footer";
import Loader from "../components/Loader/Loader";
import Music from "../components/music/music";
import Pagination from "react-js-pagination";

const allMusic = () => {
  const [currentpage, setCurrentPage] = useState(1);
  const music = useSelector((state) => state.music);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMusic());
  }, []);

  const handleChange = () => {
    console.log("change");
  };

  if (!music.musics)
    return (
      <div className={style.container}>
        <Loader loading={true} />
      </div>
    );
  return (
    <>
      <div className={style.container}>
        {music.musics.data.map((m) => (
          <Music music={m} />
        ))}
        {console.log(music.musics.data, music.musics.totalPages)}
      </div>
      <Pagination
        totalItemsCount={music.musics.totalPages}
        activePage={currentpage}
        onChange={handleChange}
      />
      <Footer />
    </>
  );
};

export default allMusic;
