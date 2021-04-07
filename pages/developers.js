import styles from '../styles/Testimonial.module.css';
import Head from 'next/head';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const developers = () => {
  return (
    <div>
      <div className={styles.testimonials}>
        <Head>
          <title>VOVOCA | Developers</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
          />
        </Head>
        <div className={styles.container}>
          <h1 className={styles.testimonial__heading}>Meet the Developers</h1>
          <div className={styles.testimonial__row__1}>
            <div className={styles.testimonial}>
              <article className={styles.testimonial__article}>
                <div className={styles.testimonial__content}>
                  <p>
                    It was really an Amazing Experience building this website, during production we used to 
                    faced lots bugs and also solved them with the help of each other 
                  </p>
                  <span>Varun Singh</span>
                  <br />
                  <span>Developer, Vovoca</span>
                </div>
                <div
                  className={styles.testimonial__img}
                  style={{
                    backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C5103AQHlqCz2y6gWFA/profile-displayphoto-shrink_800_800/0/1576986523117?e=1623283200&v=beta&t=9m4ZEjXa-M_XOEKVe-JX1l9ayHqpwq1flSQd0gfHgJY)`,
                  }}
                ></div>
              </article>
              <Link href="https://www.linkedin.com/in/v-varun/">
                <button
                  style={{
                    width: '100%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    marginTop: '-5%',
                  }}
                >
                  <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                </button>
              </Link>
            </div>
            <div className={styles.testimonial}>
              <article className={styles.testimonial__article}>
                <div className={styles.testimonial__content}>
                  <p>
                    Loving every bit of Vovoca. Thanks to the website now I can
                    use and upload these sounds and beats to make songs for my
                    local dance group
                  </p>
                  <span>Varun Singh</span>
                  <br />
                  <span>Developer, Vovoca</span>
                </div>
                <div
                  className={styles.testimonial__img}
                  style={{
                    backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C5103AQHlqCz2y6gWFA/profile-displayphoto-shrink_800_800/0/1576986523117?e=1623283200&v=beta&t=9m4ZEjXa-M_XOEKVe-JX1l9ayHqpwq1flSQd0gfHgJY)`,
                  }}
                ></div>
              </article>
              <Link href="https://www.linkedin.com/in/v-varun/">
                <button
                  style={{
                    width: '100%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    marginTop: '-5%',
                  }}
                >
                  <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                </button>
              </Link>
            </div>
            <div className={styles.testimonial}>
              <article className={styles.testimonial__article}>
                <div className={styles.testimonial__content}>
                  <p>
                    Loving every bit of Vovoca. Thanks to the website now I can
                    use and upload these sounds and beats to make songs for my
                    local dance group
                  </p>
                  <span>Varun Singh</span>
                  <br />
                  <span>Developer, Vovoca</span>
                </div>
                <div
                  className={styles.testimonial__img}
                  style={{
                    backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C5103AQHlqCz2y6gWFA/profile-displayphoto-shrink_800_800/0/1576986523117?e=1623283200&v=beta&t=9m4ZEjXa-M_XOEKVe-JX1l9ayHqpwq1flSQd0gfHgJY)`,
                  }}
                ></div>
              </article>
              <Link href="https://www.linkedin.com/in/v-varun/">
                <button
                  style={{
                    width: '100%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    marginTop: '-5%',
                  }}
                >
                  <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default developers;
