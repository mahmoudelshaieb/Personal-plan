import GetSocial from "../GetSocial";
import Status from "../Status";
import ListItem from "../ListItem";
import { experience } from "../../constrains/data";

// const profileStats = [
//   {
//     label: "Age",
//     value: "28",
//   },
//   {
//     label: "Education",
//     value: "Computer Science",
//   },
//   {
//     label: "Occupation",
//     value: "Digital Product Designer",
//   },
//   {
//     label: "Location",
//     value: "Cairo, Egypt",
//   },
// ];

export default function About({ avatar, primaryBio, secondaryBio, lists }) {
  return (
    <section className={`container`}>
      <div className="row">
        <div className="col-sm-12 col-lg-4 text-center text-md-left mb-5 mb-lg-0 mt-0 mt-md-5">
          <img
            className="img-fluid overflow-hidden rounded-3"
            src={avatar}
            alt="about"
            loading="lazy"
          />
          <div className="mt-4 text-center me-4">
            <GetSocial />
          </div>
        </div>
        <div className="col-sm-12 col-lg-8 px-md-5 mt-0 mt-md-5">
          <h2 className="mb-3">
            <span className="text-primary">Hello</span>, Nice to{" "}
            <span className="text-primary">meet </span>you !
          </h2>
          <p className="present-p">{primaryBio}</p>
          <h5>My Design Process</h5>
          {lists ? <ListItem lists={lists} /> : null}
          {secondaryBio ? (
            <p className="present-p mt-3">{secondaryBio}</p>
          ) : null}
        </div>
      </div>
      <div className="py-3 py-lg-5 my-5 border-top">
        <div className="row">
          {experience.map((item, index) => (
            <div key={index} className={"col-sm-12 col-lg-6 mb-2 mb-lg-5"}>
              <Status title={item.title} collection={item.collection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
