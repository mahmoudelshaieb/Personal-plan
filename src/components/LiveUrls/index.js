import styles from "./index.module.scss";

export default function LiveUrls({ urls }) {
  return urls.map((link, index) => (
    <span key={index} className={`${styles.link} pe-3`}>
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="text-black d-inline-block pe-1"
      >
        {link.label}
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
      </svg>
    </span>
  ));
}
