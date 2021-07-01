import styles from "./index.module.scss";

export default function FullPresent({
  title,
  desc,
  img,
  background = "#ffffff",
}) {
  return (
    <section
      className={`${styles.present} text-center container-fluid`}
      style={{ backgroundColor: background }}
    >
      <div className="container">
        <div className="mx-2 mx-md-5">
          <h2 className="text-uppercase text-primary present-heading">
            {title}
          </h2>
          {desc ? <p className="present-p">{desc}</p> : null}
          <img
            src={img}
            alt={`${title} img`}
            loading="lazy"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
}
