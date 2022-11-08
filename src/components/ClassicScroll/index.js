import styles from "./index.module.scss";

export default function ClassicScroll({ images }) {
  return (
    <div className={`${styles.card} my-5`}>
      <div className={`${styles.cardImg} mb-3 mb-lg-4`}>
        <img className="img-fluid" src={images} alt={`${images}-1`} loading="lazy" />
      </div>
    </div>
  );
}
