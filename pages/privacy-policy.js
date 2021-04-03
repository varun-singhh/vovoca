import React from "react";
import Head from "next/head";
import style from "../styles/PrivacyPolicy.module.css";

const privacyPolicy = () => {
  const maximiseInfo = (num) => {
    if (process.browser) {
      const paraNum = document.getElementById(num);
      const paraNum1 = document.getElementById(1);
      const paraNum2 = document.getElementById(2);
      const paraNum3 = document.getElementById(3);
      paraNum1.classList.add("PrivacyPolicy_none__2C-dW");
      paraNum2.classList.add("PrivacyPolicy_none__2C-dW");
      paraNum3.classList.add("PrivacyPolicy_none__2C-dW");
      paraNum.classList.remove("PrivacyPolicy_none__2C-dW");
    }
  };

  return (
    <div className={style.container}>
      <Head>
        <title>VOVOCA | Privacy Policy</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
      </Head>
      <div className={style.app}>
        <h2>Privacy Policy</h2>
        <div className={style.modal__button}>
          <div className={style.modal__button__info}>
            <h4>General Information</h4>
            <div
              onClick={() => {
                maximiseInfo("1");
              }}
              className={style.toggle__button}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <p id="1b" id="1" className={style.modal__button__para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            adipisci quibusdam vitae praesentium provident sunt nihil
            aspernatur, unde dolor ullam amet reiciendis blanditiis commodi ab
            repudiandae explicabo pariatur quasi dolore excepturi! Voluptatum,
            earum quae. Facere ducimus ipsa quaerat porro hic soluta, tenetur
            aperiam totam temporibus quos fuga quam, placeat alias!
            Necessitatibus eum amet nemo fugit explicabo dolores natus repellat
            culpa aliquam? Tempore ea velit non nulla accusantium dolore
            recusandae molestias
          </p>
        </div>
        <div className={style.modal__button}>
          <div className={style.modal__button__info}>
            <h4>User data Security</h4>
            <div
              id="2b"
              onClick={() => {
                maximiseInfo("2");
              }}
              className={style.toggle__button}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <p
            id="2"
            className={[style.modal__button__para, style.none].join(" ")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            adipisci quibusdam vitae praesentium provident sunt nihil
            aspernatur, unde dolor ullam amet reiciendis blanditiis commodi ab
            repudiandae explicabo pariatur quasi dolore excepturi! Voluptatum,
            earum quae. Facere ducimus ipsa quaerat porro hic soluta, tenetur
            aperiam totam temporibus quos fuga quam, placeat alias!
            Necessitatibus eum amet nemo fugit explicabo dolores natus repellat
            culpa aliquam? Tempore ea velit non nulla accusantium dolore
            recusandae molestias
          </p>
        </div>
        <div className={style.modal__button}>
          <div className={style.modal__button__info}>
            <h4>Database Policy</h4>
            <div
              id="3b"
              onClick={() => {
                maximiseInfo("3");
              }}
              className={style.toggle__button}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <p
            id="3"
            className={[style.modal__button__para, style.none].join(" ")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            adipisci quibusdam vitae praesentium provident sunt nihil
            aspernatur, unde dolor ullam amet reiciendis blanditiis commodi ab
            repudiandae explicabo pariatur quasi dolore excepturi! Voluptatum,
            earum quae. Facere ducimus ipsa quaerat porro hic soluta, tenetur
            aperiam totam temporibus quos fuga quam, placeat alias!
            Necessitatibus eum amet nemo fugit explicabo dolores natus repellat
            culpa aliquam? Tempore ea velit non nulla accusantium dolore
            recusandae molestias
          </p>
        </div>
      </div>
    </div>
  );
};

export default privacyPolicy;
