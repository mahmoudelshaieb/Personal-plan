import styles from "./index.module.scss";

export default function Status({ title, collection }) {
  return (
    <section className={`${styles.status} pb-3 pb-lg-0`}>
      {title ? <h4 className="text-capitalize present-subheading mb-4 mt-4 mt-lg-0">{title}</h4> : null}
      {collection
        ? collection.map((item, index) => (
            <div key={index}>
              {item.subTitle ? <h6 className="mb-1">{item.subTitle}</h6> : null}
              {item.bio ? <p className="mb-1 present-p">{item.bio}</p> : null}
              {item.italic ? <p className="fst-italic mb-2 present-p">{item.italic}</p> : null}
            </div>
          ))
        : null}
    </section>
  );
}
