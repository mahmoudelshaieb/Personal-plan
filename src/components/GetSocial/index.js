import styles from "./index.module.scss";

import { getSocial } from "../../constrains/data";

export default function GetSocial() {
  return (
    <div className={`${styles.social}`}>
      {getSocial.map((item, index) => (
        <a href={item.url} key={index} className="p-3 p-lg-3 ms-2" target="_blank" rel="noreferrer">
          <img src={item.icon} alt={item.title} loading="lazy" />
        </a>
      ))}
    </div>
  );
}
