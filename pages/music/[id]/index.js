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
import Head from "next/head";
import fileDownload from "js-file-download";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleMusic(id));
  }, [id]);
  const { music } = useSelector((state) => state.music);

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
      toast.success("Link Copied");
    }
  };

  if (!music)
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
      <Head>
        <title>VOVOCA | {music.name}</title>
      </Head>
      <ToastContainer position="top-center" />
      <div className={style.container}>
        <input type="text" id="myInput" style={{ visibility: "hidden" }} />
        <div className={style.card}>
          <img className={style.background__image} src={music.image}></img>
          <img className={style.image} src={music.image}></img>
          <div className={style.buttons}>
            <Link href="/allMusic" replace>
              <button>
                <HiViewList />
              </button>
            </Link>
            <a href={`data:audio/mp3;base64,${Buffer.from(music.audiobuffer.data).toString("base64")}`} download={music.name}>
              <button>
                <HiCloudDownload />
              </button>
            </a>
            <button
              onClick={() => {
                copyLink();
              }}
            >
              <HiShare />
            </button>
          </div>
          <div className={style.other__images}>
            <div className={style.detes}>
              <h1 className={style.name}>{music.name}</h1>
              <h4 className={style.artist}>
                Music by: <span>{music.artist}</span>
              </h4>
            </div>
            <div className={style.audio}>
              <AudioPlayer
                autoPlayAfterSrcChange={false}
                src={`data:audio/mp3;base64,${Buffer.from(
                  music.audiobuffer?.data
                ).toString("base64")}`}
                onError={(e) => {
                  toast.error("Internal Server Error");
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
