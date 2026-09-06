import styles from "./index.module.scss";

export default function Cover({ coverImg, alt = "" }) {
  return (
    <div className={`${styles.coverImg} overflow-hidden mb-5`}>
      <img src={coverImg} alt={alt} loading="lazy" />
    </div>
  );
}
