import styles from "./index.module.scss";

export default function Cover({ title, subTitle, strong, bio, coverImg }) {
  return (
    <section className={`${styles.cover} mt-5`}>
      <div className={`${styles.desc}`}>
        <h3 className="text-capitalize text-primary mb-3">{title}</h3>
        <h5 className="mb-3">{subTitle}</h5>
        <p>
          <span className="pe-1">{strong}</span>
          {bio}
        </p>
      </div>
      <div className={`${styles.coverImg} mt-5`}>
        <img src={coverImg} alt={`${title} case`} loading="lazy" />
      </div>
    </section>
  );
}
