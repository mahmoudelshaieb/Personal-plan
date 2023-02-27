import styles from "./index.module.scss";

export default function WorkCard({ title, desc, img }) {
  return (
    <div className={`${styles.card} mb-5`}>
      <div className={`${styles.cardImg} mb-3 mb-lg-4`}>
        <img className="img-fluid" src={img} alt={title} loading="lazy" />
      </div>
      <div className={`${styles.cardInfo}`}>
        <h3 className="text-capitalize">{title}</h3>
        <p className="present-p">{desc}</p>
      </div>
    </div>
  );
}
