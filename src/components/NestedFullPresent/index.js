import styles from "./index.module.scss";

export default function NestedFullPresent({ title, guides }) {
  return (
    <section className={`${styles.present} container-fluid`}>
      <div className="container">
        <div className="mx-2 mx-md-5">
          <h2 className="text-uppercase text-primary present-heading text-center mb-3 mb-md-5">
            {title}
          </h2>
          {guides
            ? guides.map((item, index) => (
                <div key={index} className="mb-4 text-center text-md-start">
                  <h4 className="present-subheading text-uppercase mb-2">
                    {item.subTitle}
                  </h4>
                  {item.desc ? (
                    <p className="present-p m-0">{item.desc}</p>
                  ) : null}
                  <img
                    src={item.img}
                    alt={`${title} img`}
                    loading="lazy"
                    className="img-fluid mt-3 rounded-3 overflow-hidden"
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
