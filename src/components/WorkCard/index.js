import styles from "./index.module.scss";

export default function WorkCard({ title, img }) {
  return (
    <div className={`${styles.card}`}>
      <img src={img} alt={img} loading="lazy" />
      <p className="text-white">{title}</p>
      <button className="btn text-capitalize px-4 py-2">explore</button>
    </div>
  );
}
