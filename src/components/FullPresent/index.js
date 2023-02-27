import styles from "./index.module.scss";
import ClassicScroll from "../ClassicScroll";
import ListItem from "../ListItem";

export default function FullPresent({
  projectName,
  title,
  subTitle,
  desc,
  descSecondry,
  img = [],
  lists = [],
  url,
  background = "#ffffff",
}) {
  return (
    <section
      className={`${styles.present} container-fluid`}
      style={{ backgroundColor: background }}
    >
      <div className="container">
        {projectName ? (
          <h2 className="text-capitalize text-primary mb-2 mb-md-5">
            {projectName}
          </h2>
        ) : null}
        <h3 className="text-capitalize mb-4">{title}</h3>
        {subTitle ? <h5 className="">{subTitle}</h5> : null}
        {desc ? <p className="present-p">{desc}</p> : null}
        {descSecondry ? <p className="present-p">{descSecondry}</p> : null}
        {img ? <ClassicScroll images={img} /> : null}
        {lists ? <ListItem lists={lists} /> : null}
        {url ? (
          <a href={url} target="_blank" className="w-100 d-inline-block text-center fs-5">
            See Live Demo
          </a>
        ) : null}
      </div>
    </section>
  );
}
