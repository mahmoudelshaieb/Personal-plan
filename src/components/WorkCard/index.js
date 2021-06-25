import styles from "./index.module.scss";

export default function WorkCard({ title, img }) {
  return (
    <a href="#">
      <div className={`${styles.card}`}>
        <img src={img} alt={img} loading="lazy" />
        <p className="text-white">{title}</p>
      </div>
    </a>
  );
}
