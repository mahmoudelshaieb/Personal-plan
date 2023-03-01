import styles from "./index.module.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function NestedFullPresent({ title, guides }) {
  return (
    <section className={`${styles.present} container-fluid`}>
      <div className="container">
        <h2 className="text-capitalize mb-3 mb-md-5">{title}</h2>
        {guides
          ? guides.map((item, index) => (
              <div key={index} className="mb-5">
                <h4 className="present-subheading text-capitalize mb-3">
                  {item.subTitle}
                </h4>
                {item.desc ? (
                  <p className="present-p m-0">{item.desc}</p>
                ) : null}
                <Zoom>
                  <img
                    src={item.img}
                    alt={`${title} img`}
                    loading="lazy"
                    className="img-fluid mt-3   overflow-hidden"
                  />
                </Zoom>
              </div>
            ))
          : null}
      </div>
    </section>
  );
}
