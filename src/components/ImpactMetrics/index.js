import styles from "./index.module.scss";

export default function ImpactMetrics({ mertics }) {
  return (
    <div className="container">
      <div className={`${styles.mertics} row align-items-center mx-2 mx-sm-0`}>
        {mertics.map((insight, index) => (
          <div key={index} className="col-4 p-0 text-center border-end">
            <h6 className="mb-2 mb-sm-3 fw-normal">{insight.title}</h6>
            <h1 className="m-0">{insight.metric}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
