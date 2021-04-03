import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSingleMusic } from '../../../actions/musicActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../../../components/Loader/Loader";
import style from '../../../styles/singleMusic.module.css'
import Footer from '../../../components/homepage/Footer/Footer'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { HiViewList, HiCloudDownload, HiShare } from 'react-icons/hi'
import Link from 'next/link'
import Head from "next/head";
import fileDownload from 'js-file-download'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = () => {

    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleMusic(id))
    }, [id])
    const { music } = useSelector(state => state.music)
    
    const copyLink = () => {
        if (process.browser) {
            var inputc = document.body.insertAdjacentElement('beforebegin',document.createElement("input"))
            inputc.value = window.location.href;
            inputc.focus();
            inputc.select();
            document.execCommand('copy');
            inputc.parentNode.removeChild(inputc);
            toast.success("Link Copied")
        }
    }

    const downloadMusic = async (music) => {
        fileDownload(`data:audio/wav;base64,${Buffer.from(music.audiobuffer.data).toString('base64')}`, `${music.name}.wav`);
        const res = await axios.patch(`https://vovoca.herokuapp.com/api/music/download/${music._id}`)
        console.log(res.data.downloadcount);
    }

    if (!music)
        return (
            <>
                <div className={style.container}>
                    <Loader loading={true}/>
                </div>
                <Footer/>
            </>
        )

    return (
        <>
            <Head>
                <title>VOVOCA | {music.name}</title>
            </Head>
            <ToastContainer position="top-center" />
            <div className={style.container}>
                <input type="text" id="myInput" style={{visibility: 'hidden'}}/>
                <div className={style.card}>
                    <img className={style.background__image} src="https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                    <img className={style.image} src="https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                    <div className={style.buttons}>
                        <Link href="/allMusic" replace><button><HiViewList/></button></Link>
                        <button disabled={music.audiobuffer.data ? false : true} onClick={() => {downloadMusic(music)}}><HiCloudDownload/></button>
                        <button onClick={() => {copyLink()}}><HiShare/></button>
                    </div>
                    <div className={style.other__images}>
                        <div className={style.detes}>
                            <h1 className={style.name}>{music.name}</h1>
                            <h4 className={style.artist}>Music by: <span>Kaustubhai</span></h4>
                        </div>
                        <div className={style.audio}>
                            <AudioPlayer 
                                autoPlayAfterSrcChange={false}
                                src={`data:audio/wav;base64,${Buffer.from(
                                music.audiobuffer?.data
                                ).toString('base64')}`}
                                onError={(e) => {
                                toast.error('Internal Server Error');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
                  </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default index
