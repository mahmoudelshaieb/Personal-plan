import styles from "./index.module.scss";
import ClassicScroll from "../ClassicScroll";

export default function FullPresent({
  projectName,
  title,
  desc,
  img = [],
  background = "#ffffff",
  padding = "96px 0",
}) {
  return (
    <section
      className={`${styles.present} container-fluid`}
      style={{ backgroundColor: background, padding: padding }}
    >
      <div className="container">
        {projectName ? (
          <h2 className="text-capitalize text-primary mb-2 mb-md-5">
            {projectName}
          </h2>
        ) : null}
        <h3 className="text-capitalize mb-4">{title}</h3>
        {desc ? <p className="present-p">{desc}</p> : null}
        <div>
          {img
            ? img.map((item, index) => (
                <ClassicScroll key={index} images={item} />
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
