import styles from "./index.module.scss";

export default function NestedFullPresent({
  title,
  guides,
  padding = "96px 0",
}) {
  return (
    <section
      className={`${styles.present} container-fluid`}
      style={{ padding: padding }}
    >
      <div className="container">
        <h2 className="text-capitalize mb-3 mb-md-5">{title}</h2>
        {guides
          ? guides.map((item, index) => (
              <div key={index} className="mb-5">
                <h4 className="present-subheading text-capitalize mb-3">
                  {item.subTitle}
                </h4>
                {item.desc ? (
                  <p className="present-p m-0">{item.desc}</p>
                ) : null}
                <img
                  src={item.img}
                  alt={`${title} img`}
                  loading="lazy"
                  className="img-fluid mt-3   overflow-hidden"
                />
              </div>
            ))
          : null}
      </div>
    </section>
  );
}
