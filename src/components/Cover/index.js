import styles from "./index.module.scss";

export default function Cover({ title, strong, bio, coverImg }) {
  return (
    <section className={`${styles.cover}`}>
      <div className={`${styles.coverImg} overflow-hidden mb-5`}>
        <img src={coverImg} alt={`${title} case`} loading="lazy" />
      </div>
      <div className="container">
        <div className="mx-2 mx-md-5">
          <div className={`${styles.desc}`}>
            <h2 className="text-capitalize text-primary mb-2 mb-md-5">{title}</h2>
            <h3 className="text-capitalize my-4">overview</h3>
            <p className="present-p">
              <span className="pe-1">{strong}</span>
              {bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
