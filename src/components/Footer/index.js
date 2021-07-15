import styles from "./index.module.scss";
import GetSocial from "../GetSocial";
import { useLocation } from "react-router-dom";

export default function Footer({ fname, lname }) {
  const location = useLocation().pathname;
  return (
    <div className={`container ${location === "/" ? "fixed-bottom" : ""}`}>
      <footer className={`${styles.footer} pt-3 pb-1 mx-2 mx-md-0 bg-white`}>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <img
              className="px-2"
              src="./assets/copyright.svg"
              alt="copy"
              loading="lazy"
            />
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
