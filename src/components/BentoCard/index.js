import styles from "./index.module.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function BentoCard({
  title,
  desc,
  descWidth = 100,
  asset,
  assetWidth = 100,
}) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardInfo}`}>
        <h3>{title}</h3>
        <p className="present-p" style={{ width: `${descWidth}%` }}>
          {desc}
        </p>
      </div>
      <div
        className={`${styles.cardImg} text-end`}
        style={{ width: `${assetWidth}%` }}
      >
        <Zoom>
          <img className="img-fluid" src={asset} alt={title} loading="lazy" />
        </Zoom>
      </div>
    </div>
  );
}
