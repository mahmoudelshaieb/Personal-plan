import styles from "./index.module.scss";
import GetSocial from "../GetSocial";
import Status from "../Status";

export default function About({ avatar, primaryBio, secondaryBio }) {
  const experience = [
    {
      title: "education",
      collection: [
        {
          subTitle: "Open Source Application Development",
          bio: "Technical Trainer, Information Technology Institute (ITI)",
          italic: "December 2019",
        },
        {
          subTitle: "Faculty of Computer and Information",
          bio: "Bachelor Degree, Computer Science",
          italic: "June 2016",
        },
      ],
    },
    {
      title: "experience",
      collection: [
        {
          subTitle: "Sakneen",
          italic: "April 2020 - Present",
        },
        {
          subTitle: "Pioneers",
          italic: "January 2020 - March 2020",
        },
      ],
    },
    {
      title: "design skills",
      collection: [
        {
          bio: "echnical Trainer, Information Technology Institut",
        },
      ],
    },
    {
      title: "technical skills",
      collection: [
        {
          bio: "echnical Trainer, Information Technology Institut",
        },
      ],
    },
  ];
  return (
    <section className={`${styles.about} container`}>
      <div className="row">
        <div className="col-sm-12 col-lg-4 text-center text-md-left mb-3 mb-lg-0 mt-0 mt-md-5">
          <img className="img-fluid" src={avatar} alt="about" loading="lazy" />
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
        <div className="py-3 py-lg-5 my-5 border-top">
          <div className="row">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`col-sm-12 ${
                  index === 0
                    ? "col-lg-4"
                    : index === 1
                    ? "col-lg-2 p-0"
                    : "col-lg-3"
                }`}
              >
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
