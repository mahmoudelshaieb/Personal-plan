import styles from "./index.module.scss";

export default function Footer({ fname, lname }) {
  const getSocial = [
    {
      title: "twitter",
      icon: "./assets/test-icon.svg",
      url: "",
    },
    {
      title: "behace",
      icon: "./assets/test-icon.svg",
      url: "",
    },
  ];
  return (
    <div className="container">
      <footer className={`${styles.footer} pt-4 pb-4 mx-2 mx-md-0`}>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <img src="./assets/test-icon.svg" alt="copy" loading="lazy" />
            <span className="px-3 text-black text-capitalize">
              <span className="text-primary pe-1">{fname}</span>
              {lname}
            </span>
          </div>
          <div className="col-sm-12 col-md-6 text-start text-md-end">
            {getSocial.map((item, index) => (
              <a href={item.url} key={index} className="ps-md-3">
                <img src={item.icon} alt={item.title} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
