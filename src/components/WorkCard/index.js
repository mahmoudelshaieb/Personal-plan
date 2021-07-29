import styles from "./index.module.scss";

export default function WorkCard({ title, img }) {
  return (
    <div className={`${styles.card} border`}>
      <img src={img} alt={title} loading="lazy" />
      <p className="text-white text-capitalize">{title}</p>
      <button className="btn text-capitalize px-4 py-2 rounded-pill">explore</button>
    </div>
  );
}
