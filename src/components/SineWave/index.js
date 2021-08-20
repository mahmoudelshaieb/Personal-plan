import styles from "./index.module.scss";

export default function SineWave({
  title,
  step,
  primaryDesc,
  secondaryDesc,
  img,
  RTL = false,
  background = "#ffffff",
}) {
  return (
    <section
      className={`${styles.wave} container-fluid`}
      style={{ backgroundColor: background }}
    >
      <div className="container">
        <div
          className={`${
            RTL ? "flex-row-reverse" : ""
          } row mx-2 mx-lg-5 align-items-center`}
        >
          <div
            className={`col-sm-12 col-lg-5 p-0 ${RTL ? "ps-2 ps-lg-5" : ""}`}
          >
            <h2 className="text-uppercase mb-3">
              <span className="pe-2">
                0<span className="text-primary">{step}</span>
              </span>
              {title}
            </h2>
            <p className="present-p">{primaryDesc}</p>
            {secondaryDesc ? (
              <p className="present-p">{secondaryDesc}</p>
            ) : null}
          </div>
          <div className="col-sm-12 col-lg-7 p-0 order-first order-lg-last mb-4 mb-lg-0">
            <div className={`${styles.waveImg} shadow rounded-3 overflow-hidden`}>
              <img src={img} alt={`${title} img`} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
