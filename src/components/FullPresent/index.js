import styles from "./index.module.scss";

export default function FullPresent({
  title,
  desc,
  img,
  background = "#ffffff",
  padding = "96px 0"
}) {
  return (
    <section
      className={`${styles.present} container-fluid`}
      style={{ backgroundColor: background, padding: padding }}
    >
      <div className="container">
        <div className="mx-2 mx-md-5">
          <h3 className="text-capitalize mb-4">
            {title}
          </h3>
          {desc ? <p className="present-p">{desc}</p> : null}
          {
            img ?
              <img
                src={img}
                alt={`${title} img`}
                loading="lazy"
                className="img-fluid   overflow-hidden"
              /> : null
          }
        </div>
      </div>
    </section>
  );
}
