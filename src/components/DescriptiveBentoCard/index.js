import styles from "./index.module.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function DescriptiveBentoCard({ introtxt, desc, asset }) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardInfo}`}>
        <p className="present-p">
          {introtxt}
          <span className="ps-2">{desc}</span>
        </p>
      </div>
      <div className={`${styles.cardImg} text-end`}>
        <Zoom>
          <img
            className="img-fluid"
            src={asset}
            alt={introtxt}
            loading="lazy"
          />
        </Zoom>
      </div>
    </div>
  );
}
