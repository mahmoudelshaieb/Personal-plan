import styles from "./index.module.scss";

import WorkFlowStatus from "../WorkFlowStatus";

export default function WorkCard({ title, workFlow, desc, img }) {
  return (
    <div className={`${styles.card} mb-5`}>
      <div className={`${styles.cardImg} mb-3 mb-lg-4`}>
        <img className="img-fluid" src={img} alt={title} loading="lazy" />
      </div>
      <div className={`${styles.cardInfo}`}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="text-capitalize m-0 pe-3">{title}</h3>
          <WorkFlowStatus status={workFlow} />
        </div>
        <p className="present-p">{desc}</p>
      </div>
    </div>
  );
}
