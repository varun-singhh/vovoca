import styles from "../styles/Testimonial.module.css";
import Head from "next/head";
import Footer from "../components/homepage/Footer/Footer";

const testimonial = () => {
  return (
    <>
    <div className={styles.testimonials}>
      <Head>
        <title>VOVOCA | Testimonial</title>
        <Link scroll={true}
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.testimonial__heading}>Testimonial</h1>
        <div className={styles.testimonial__row__1}>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Making My Life Easier</span>
                <p>
                  Loving every bit of Vovoca. Thanks to the website now I can
                  use and upload these sounds and beats to make songs for
                  my local dance group
                </p>
                <span>Devansh Kaushik, </span><br/>
                <span>DNRevolution</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>My Reels got more sexy</span>
                <p>
                  After recording and editing my IG's reels, hardest part was to 
                  get throught the audio part. Good music wasn't available 
                  anywhere. Vovoca solved both of my problems
                </p>
                <span>Sheril Sonkar, </span><br/>
                <span>IG Influencer</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Nice Music for free</span>
                <p>
                  Searching music was always a hard job but not anymore
                  I am more than happy with the filter and sorting feature of
                  vovoca. It is awesome
                </p>
                <span>Amolik Vivian, </span><br/>
                <span>ChaiWala</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Better than Youtube</span>
                <p>
                  I'm an artist and I know how hard it is to find a platform
                  like vovoca where your music finds its right destination
                  Wishing vovoca more success
                </p>
                <span>DJ John</span><br/>
                <span>Ahuja Music</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Literal Chills</span>
                <p>
                  All my hard time all these years could have been less hard only 
                  if I would have founded vovoca earlier. It is an
                  amazing website with just everything I need
                </p>
                <span>Archit Sharma</span><br/>
                <span>Head, ACM-JUIT</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Searching music just got fun</span>
                <p>
                  I design music for my company and its always great to find some
                  motivation. Vovoca gave it to me, that to free. I owe them 
                  a lot for all my music
                </p>
                <span>Andy Cortrell, </span><br/>
                <span>Tayio.ai</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default testimonial;
