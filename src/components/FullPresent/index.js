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
        {subTitle ? <h5 className="">{subTitle}</h5> : null}
        {desc ? <p className="present-p">{desc}</p> : null}
        {descSecondry ? <p className="present-p">{descSecondry}</p> : null}
        <div>
          {img
            ? img.map((item, index) => (
                <ClassicScroll key={index} images={item} />
              ))
            : null}
        </div>
        {lists ? (
          <ul className="ps-4">
            {lists.map((list, index) => (
              <ListItem key={index} lists={list} />
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
