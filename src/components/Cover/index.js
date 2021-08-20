import styles from "./index.module.scss";

export default function Cover({ title, subTitle, strong, bio, coverImg }) {
  return (
    <section className={`${styles.cover} mt-3`}>
      <div className={`${styles.desc}`}>
        <h3 className="text-capitalize text-primary mb-2 mb-md-3">{title}</h3>
        <h5 className="mb-2 mb-md-3">{subTitle}</h5>
        <p>
          <span className="pe-1">{strong}</span>
          {bio}
        </p>
      </div>
      <div className={`${styles.coverImg} mt-3 mt-md-5 rounded-3 overflow-hidden`}>
        <img src={coverImg} alt={`${title} case`} loading="lazy" />
      </div>
    </section>
  );
}
