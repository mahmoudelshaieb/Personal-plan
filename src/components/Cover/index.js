import styles from "./index.module.scss";

export default function Cover({ coverImg }) {
  return (
    <div className={`${styles.coverImg} overflow-hidden mb-5`}>
      <img src={coverImg} alt={`${coverImg} case`} loading="lazy" />
    </div>
  );
}
