import Navbar from "../components/homepage/Navbar/Navbar";
import styles from "../styles/Testimonial.module.css";
import Head from "next/head";

const testimonial = () => {
  return (
    <div className={styles.testimonials}>
      <Head>
        <title>VOVOCA | Testimonial</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.testimonial__heading}>Testimonial</h1>
        <div className={styles.testimonial__row__1}>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Making Your Life Easier</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum
                  dolor sit amet, consectetur adipiscing.
                </p>
                <span>John Doue, </span>
                <span>SEO "Company"</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Making Your Life Easier</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum
                  dolor sit amet, consectetur adipiscing.
                </p>
                <span>John Doue, </span>
                <span>SEO "Company"</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Making Your Life Easier</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum
                  dolor sit amet, consectetur adipiscing.
                </p>
                <span>John Doue, </span>
                <span>SEO "Company"</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
        </div>
        <div className={styles.testimonial__row__2}>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Making Your Life Easier</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum
                  dolor sit amet, consectetur adipiscing.
                </p>
                <span>John Doue, </span>
                <span>SEO "Company"</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Making Your Life Easier</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum
                  dolor sit amet, consectetur adipiscing.
                </p>
                <span>John Doue, </span>
                <span>SEO "Company"</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
          <div className={styles.testimonial}>
            <article className={styles.testimonial__article}>
              <div className={styles.testimonial__content}>
                <span>Making Your Life Easier</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum
                  dolor sit amet, consectetur adipiscing.
                </p>
                <span>John Doue, </span>
                <span>SEO "Company"</span>
              </div>
              <div className={styles.testimonial__img}>
                <img src="/android-icon-36x36.png" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
