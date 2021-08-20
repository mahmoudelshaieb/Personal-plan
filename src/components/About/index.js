import styles from "./index.module.scss";
import GetSocial from "../GetSocial";
import Status from "../Status";
import { experience } from "../../constrains/data";

export default function About({ avatar, primaryBio, secondaryBio }) {
  return (
    <section className={`${styles.about} container`}>
      <div className="row">
        <div className="col-sm-12 col-lg-4 text-center text-md-left mb-3 mb-lg-0 mt-0 mt-md-5">
          <img className="img-fluid rounded-3 overflow-hidden shadow" src={avatar} alt="about" loading="lazy" />
        </div>
        <div className="col-sm-12 col-lg-8 px-md-5 mt-0 mt-md-5">
          <h2>
            <span className="text-primary">Hello</span>, Nice to{" "}
            <span className="text-primary">meet </span>you !
          </h2>
          <p className="present-p">{primaryBio}</p>
          <p className="present-p">{secondaryBio}</p>
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
