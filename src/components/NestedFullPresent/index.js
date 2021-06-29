import styles from "./index.module.scss";

export default function NestedFullPresent({ title }) {
  const guides = [
    {
      subTitle: "material ui design system",
      desc: "sssssssssssss",
      img: "./assets/img.jpg",
    },
    {
      subTitle: "colors",
      img: "./assets/img2.jpg",
    },
  ];

  return (
    <section className={`${styles.present} container-fluid`}>
      <div className="container">
        <div className="mx-5">
          <h2 className="text-uppercase text-primary present-heading text-center mb-5">
            {title}
          </h2>
          {guides.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="present-subheading text-uppercase mb-2">
                {item.subTitle}
              </h4>
              {item.desc ? <p className="present-p m-0">{item.desc}</p> : null}
              <img
                src={item.img}
                alt={`${title} img`}
                loading="lazy"
                className="img-fluid mt-3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
