import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getSingleMusic } from "../../../actions/musicActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import style from "../../../styles/singleMusic.module.css";
import Footer from "../../../components/homepage/Footer/Footer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { HiViewList, HiCloudDownload, HiShare } from "react-icons/hi";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleMusic(id));
  }, [id]);
  const { music, loading } = useSelector((state) => state.music);

  const copyLink = () => {
    if (process.browser) {
      var inputc = document.body.insertAdjacentElement(
        "beforebegin",
        document.createElement("input")
      );
      inputc.value = window.location.href;
      inputc.focus();
      inputc.select();
      document.execCommand("copy");
      inputc.parentNode.removeChild(inputc);
      toast("Link Copied", {
        closeButton: false,
        className: style.toast_success_background,
      });
    }
  };
  const downloadMusic = async (id) => {
    const res = await axios.patch(
      `https://vovoca.herokuapp.com/api/music/download/${id}`
    );
  };

  if (!music || loading)
    return (
      <>
        <div className={style.container}>
          <Loader loading={true} />
        </div>
        <Footer />
      </>
    );

  return (
    <>
      {console.log(music)}
      <Head>
        <title>VOVOCA | {music.name}</title>
      </Head>
      <div className={style.container}>
        <input type="text" id="myInput" style={{ visibility: "hidden" }} />
        <div className={style.card}>
          <img className={style.background__image} src={music.image}></img>
          <img className={style.image} src={music.image}></img>
          <div className={style.buttons}>
            <Link scroll={true} href="/allMusic">
              <button className={style.single_music_button}>
                <HiViewList />
              </button>
            </Link>

            <button
              onClick={() => downloadMusic(music._id)}
              className={style.single_music_button}
            >
              <a
                href={`data:audio/mp3;base64,${Buffer.from(
                  music.audiobuffer.data
                ).toString("base64")}`}
                download={music.name}
              >
                <HiCloudDownload />
              </a>
            </button>

            <button
              className={style.single_music_button}
              onClick={() => {
                copyLink();
              }}
            >
              <HiShare />
            </button>
          </div>
          <div className={style.other__images}>
            <div className={style.detes}>
              <h1 className={style.name}>
                {music.name.charAt(0).toUpperCase() + music.name.slice(1)}
              </h1>
              <h4 className={style.artist}>
                Music by: <span>{music.artist}</span>
              </h4>
            </div>
            <div className={style.audio}>
              <AudioPlayer
                className={[
                  style.rhap_containe,
                  style.rhap_controls_section,
                  style.rhap_main_controls_button,
                ].join(" ")}
                autoPlayAfterSrcChange={false}
                src={`data:audio/mp3;base64,${Buffer.from(
                  music.audiobuffer?.data
                ).toString("base64")}`}
                onError={(e) => {
                  toast("Oops! Something went wrong", {
                    closeButton: false,
                    className: style.toast_background,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
