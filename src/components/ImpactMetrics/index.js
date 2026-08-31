import styles from "./index.module.scss";

export default function ImpactMetrics({ mertics }) {
  // Bootstrap's 12-column grid: 3 metrics -> col-4, 4 -> col-3. Anything past
  // 4 would be unreadable, so it clamps rather than shrinking further.
  const col = Math.floor(12 / Math.min(mertics.length || 3, 4));

  return (
    <div className="container">
      <div className={`${styles.mertics} row align-items-center mx-2 mx-sm-0`}>
        {mertics.map((insight, index) => (
          <div key={index} className={`col-${col} p-0 text-center border-end`}>
            <h6 className="mb-2 mb-sm-3 fw-normal">{insight.title}</h6>
            <h1 className="m-0">{insight.metric}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
