import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllMusic } from "../actions/musicActions";

const allMusic = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMusic());
  }, []);

  const music = useSelector((state) => state.music);
  console.log(music.musics);
  return (
    <div>
      <h1>{music.musics && music.musics[0].name}</h1>
    </div>
  );
};

export default allMusic;
