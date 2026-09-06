import styles from "./index.module.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// A labeled problem / approach / result block beside its mockup.
// `blocks` carries its own labels so a study can say "Contribution" where
// another says "Approach"; `highlight` marks the outcome line.
export default function ImpactCard({
  category,
  title,
  blocks = [],
  asset,
  assetWidth = 100,
}) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardInfo}`}>
        {category ? (
          <p className={`${styles.category} text-primary`}>{category}</p>
        ) : null}
        <h3>{title}</h3>
        {blocks.map((block, index) => (
          <div key={index} className={`${styles.block}`}>
            {block.label ? <p className={`${styles.label}`}>{block.label}</p> : null}
            <p className={`${styles.body} ${block.highlight ? "text-primary" : ""}`}>
              {block.body}
            </p>
          </div>
        ))}
      </div>
      {asset ? (
        <div className={`${styles.cardImg}`}>
          <Zoom>
            <img
              className="img-fluid"
              style={{ maxWidth: `${assetWidth}%` }}
              src={asset}
              alt={title}
              loading="lazy"
            />
          </Zoom>
        </div>
      ) : null}
    </div>
  );
}
