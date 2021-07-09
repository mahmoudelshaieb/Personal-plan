import React, { useRef, useEffect } from "react";
import styles from "./index.module.scss";
import GetSocial from "../GetSocial";
import Status from "../Status";
import { experience } from "../../constrains/data";
import lottie from "lottie-web";

export default function Contact({ contactImg, contactInfo }) {
  const contactAnime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: contactAnime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./contact.json"),
    });
  }, []);
  return (
    <section className={`${styles.contact} container`}>
      <div className="row">
        <div className="col-sm-12 col-lg-4 text-center text-md-left mb-3 mb-lg-0 mt-0 mt-md-5">
          <div className="contactAnime" ref={contactAnime}></div>
        </div>
        <div className="col-sm-12 col-lg-8 px-md-5 mt-0 mt-md-5">
          <h2>
            Contact <span className="text-primary">info</span>
          </h2>
          {contactInfo.map((item, index) => (
            <div key={index} className="py-4 border-bottom">
              <img src={item.icon} alt={item.title} loading="lazy" />
              <a
                href={item.url}
                className="px-4 text-decoration-none present-p"
              >
                {item.title}
              </a>
            </div>
          ))}
          <div className="mt-4 mt-md-5 text-start text-md-end">
            <GetSocial />
          </div>
        </div>
      </div>
      <div className="py-3 py-lg-5 my-5 border-top">
        <div className="row">
          {experience.map((item, index) => (
            <div
              key={index}
              className={`col-sm-12 ${
                index === 0
                  ? "col-lg-4"
                  : index === 1
                  ? "col-lg-2 px-3 p-lg-0"
                  : "col-lg-3"
              }`}
            >
              <Status title={item.title} collection={item.collection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
