import styles from "./index.module.scss";

import { getSocial } from "../../constrains/data";

export default function GetSocial() {
  return (
    <div className={`${styles.social}`}>
      {getSocial.map((item, index) => (
        <a
          href={item.url}
          key={index}
          className="px-4 py-3 overflow-hidden rounded-3"
          target="_blank"
          rel="noreferrer"
        >
          <img src={item.icon} alt={item.title} loading="lazy" />
        </a>
      ))}
    </div>
  );
}
