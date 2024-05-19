import styles from "./index.module.scss";
import ClassicScroll from "../ClassicScroll";
import ListItem from "../ListItem";
import LiveUrls from "../LiveUrls";

export default function FullPresent({
  projectName,
  title,
  subTitle,
  desc,
  descSecondry,
  img = [],
  lists = [],
  liveUrls = [],
  url,
  background = "#ffffff",
}) {
  return (
    <section
      className={`${styles.present} container-fluid`}
      style={{ backgroundColor: background }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-lg-8">
            {projectName ? (
              <h2 className="text-capitalize text-primary">
                {projectName}
              </h2>
            ) : null}
          </div>
          <div className="col-sm-12 col-lg-4 text-start text-lg-end">
            {<LiveUrls urls={liveUrls} />}
          </div>
        </div>
        <h3 className="text-capitalize mb-4 mt-2 mt-md-5">{title}</h3>
        {subTitle ? <h5 className="">{subTitle}</h5> : null}
        {desc ? <p className="present-p">{desc}</p> : null}
        {descSecondry ? <p className="present-p">{descSecondry}</p> : null}
        {img ? <ClassicScroll images={img} /> : null}
        {lists ? <ListItem lists={lists} /> : null}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="w-100 d-inline-block text-center fs-5"
          >
            See Live Demo
          </a>
        ) : null}
      </div>
    </section>
  );
}
