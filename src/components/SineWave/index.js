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
        <div className={`${RTL ? "flex-row-reverse" : ""} row mx-5 align-items-center`}>
          <div className={`col-sm-12 col-md-5 p-0 ${RTL ? "ps-5" : ""}`}>
            <h2 className="text-uppercase mb-3">
              <span className="pe-2">
                0<span className="text-primary">{step}</span>
              </span>
              {title}
            </h2>
            <p className="present-p">{primaryDesc}</p>
            {secondaryDesc ? <p className="present-p">{secondaryDesc}</p> : null}
          </div>
          <div className="col-sm-12 col-md-7 p-0">
            <div className={`${styles.waveImg}`}>
              <img src={img} alt={`${title} img`} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
