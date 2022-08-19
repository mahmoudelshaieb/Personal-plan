import styles from "./index.module.scss";

export default function SineWave({
  title,
  primaryDesc,
  secondaryDesc,
  img,
  RTL = false,
  containImg = false,
  background = "#ffffff",
}) {
  return (
    <section
      className={`${styles.wave} container-fluid`}
      style={{ backgroundColor: background }}
    >
      <div className="container">
        <div
          className={`${RTL ? "flex-row-reverse" : ""
            } mx-2 mx-md-5 row align-items-center`}
        >
          <div
            className={`col-sm-12 col-lg-5 p-0 ${RTL ? "ps-2 ps-lg-5" : ""}`}
          >
            <h3 className="text-capitalize mb-4">
              {title}
            </h3>
            <p className="present-p">{primaryDesc}</p>
            {secondaryDesc ? (
              <p className="present-p">{secondaryDesc}</p>
            ) : null}
          </div>
          <div className="col-sm-12 col-lg-7 p-0 order-first order-lg-last mb-4 mb-lg-0">
            <div className={`${containImg ? `${styles.contained}` : `${styles.waveImg} shadow`}   overflow-hidden`}>
              <img src={img} alt={`${title} img`} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
