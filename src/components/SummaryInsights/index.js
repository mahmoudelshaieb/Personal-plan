import styles from "./index.module.scss";

export default function InsightCard({ insights }) {
  return (
    <div className="container">
      <div className="row">
        {insights.map((insight, index) => (
          <div key={index} className="col-sm-12 col-lg-4 pe-0">
            <section className={`${styles.Insights} mb-3 mb-lg-0`}>
              <h4 className="mb-3">{insight.title}</h4>
              <p className="present-p">{insight.desc}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
