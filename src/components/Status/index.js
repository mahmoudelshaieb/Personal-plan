import styles from "./index.module.scss";

export default function Status({ title, collection }) {
  return (
    <section className={`${styles.status} pb-3 pb-lg-0`}>
      {title ? <h5 className="text-uppercase mb-4 mt-4 mt-lg-0">{title}</h5> : null}
      {collection
        ? collection.map((item, index) => (
            <div key={index}>
              {item.subTitle ? <h6 className="mb-1">{item.subTitle}</h6> : null}
              {item.bio ? <p className="mb-1">{item.bio}</p> : null}
              {item.italic ? <p className="fst-italic mb-2">{item.italic}</p> : null}
            </div>
          ))
        : null}
    </section>
  );
}
