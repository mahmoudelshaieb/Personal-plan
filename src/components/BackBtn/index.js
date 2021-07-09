import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export default function BackButton({ url }) {
  return (
    <Link to={url}>
      <button type="button" className={`${styles.Backbtn} btn`}>
        <img src="../assets/back.svg" alt="back button" loading="lazy" />
      </button>
    </Link>
  );
}
