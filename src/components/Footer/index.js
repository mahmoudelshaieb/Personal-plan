import styles from "./index.module.scss";
import GetSocial from "../GetSocial"

export default function Footer({ fname, lname }) {
  return (
    <div className="container">
      <footer className={`${styles.footer} pt-4 pb-4 mx-2 mx-md-0`}>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <img className="px-2" src="./assets/copyright.svg" alt="copy" loading="lazy" />
            <span className="text-black text-capitalize">
              <span className="text-primary pe-1">{fname}</span>
              {lname}
            </span>
          </div>
          <div className="col-sm-12 col-md-6 text-center text-md-end">
            <GetSocial />
          </div>
        </div>
      </footer>
    </div>
  );
}
