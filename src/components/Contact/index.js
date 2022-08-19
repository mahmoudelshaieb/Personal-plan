import GetSocial from "../GetSocial";
import Status from "../Status";
import { experience } from "../../constrains/data";

export default function Contact({ contactImg, contactInfo }) {
  return (
    <section className={"container"}>
      <div className="row align-items-center">
        <div className="col-sm-12 col-lg-4 text-center text-md-left mb-3 mb-lg-0 mt-0 mt-md-5">
          <img className="img-fluid overflow-hidden" src={contactImg} alt="messages" loading="lazy" />
        </div>
        <div className="col-sm-12 col-lg-8 px-md-5 mt-0 mt-md-5">
          <h2 className="mb-3 mb-lg-5">
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
              className={"col-sm-12 col-lg-6 mb-2 mb-lg-5"}
            >
              <Status title={item.title} collection={item.collection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
